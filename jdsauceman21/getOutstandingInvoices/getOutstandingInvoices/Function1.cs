using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Data.SqlClient;
using System.Data;

namespace getOutstandingInvoices
{
    public static class Function1
    {
        [FunctionName("getOutstandingInvoices")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("HTTP trigger on getOutstandingInvoices.");

            string strCustomerName = req.Query["StrCoustomerName"];
            string strMinInvoiceValue = req.Query["StrMinInvoiceValue"];
            log.LogInformation("Queried for:" + strCustomerName + "" + strMinInvoiceValue);
            DataSet dsSpringfield = new DataSet();
            string strConnection = "OutstandingInvoicesString";
            string strQuery = "SELECT * FROM tblInvoices WHERE CoustomerName = @parCoustomerName AND MinInvoiceValue = @parMinInvoiceValue";
            bool blnFound = true;
            try
            {
                using (SqlConnection conOutstandingInvoices = new SqlConnection(strConnection))
                using (SqlCommand comOutstandingInvoices = new SqlCommand(strQuery, conOutstandingInvoices))
                {
                    SqlParameter parCoustomerName = new SqlParameter("parCoustomerName", SqlDbType.VarChar);
                    parCoustomerName.Value = strCustomerName;
                    comOutstandingInvoices.Parameters.Add(parCoustomerName);

                    SqlParameter parMinInvoiceValue = new SqlParameter("parMinInvoiceValue", SqlDbType.VarChar);
                    parMinInvoiceValue.Value = strMinInvoiceValue;
                    comOutstandingInvoices.Parameters.Add(parMinInvoiceValue);


                    SqlDataAdapter daOutstandingInvoices = new SqlDataAdapter(comOutstandingInvoices);
                    daOutstandingInvoices.Fill(dsSpringfield);
                }
            }catch (Exception ex)
            {
                return new OkObjectResult(ex.Message.ToString());
            }
            

            if(dsSpringfield.Tables[0].Rows.Count < 1)
            {
                blnFound = false;
            }
            if(blnFound == false)
            {
                return new OkObjectResult("Outstanding Invoice Not FOund");
            }else
            {
                return new OkObjectResult(dsSpringfield.Tables[0]);
            }
            
        }
    }
}

using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace ISISGetEmployee
{
    
    public static class getEmployee
    {
        private class Employee
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string CodeName { get; set; }
            public string Position { get; set; }
            public string Status { get;}
            public double WeeklyPay { get; }
            public string Agency { get; set; }
            public Employee(string strFirstName, string strLastName, string strCodeName, string strPosition, string strStatus, double dblPayRate, double dblHours, string strAgency)
            {
                FirstName = strFirstName;
                LastName = strLastName;
                CodeName = strCodeName;
                Position = strPosition;
                Status = strStatus;
                WeeklyPay = dblPayRate * dblHours;
                Agency = strAgency;
            }
        }

        [FunctionName("getEmployee")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string strCodeName = req.Query["CodeName"];
            string strAgency = req Query["Agency"];
            log.LogInformation("HTTP trigger on getEmployee processed a request for: " + strCodeName);

            

            Employee Archer = new Employee("Sterling", "Archer", "Duchess", "Field Agent", "Active",23.75,18.50"ISIS");
            Employee Lana = new Employee("Lana", "Kane", "Truckasaurus", "Field Agent", "Active",21.50,23.50"ISIS");
            Employee Pam = new Employee("Pam", "Poovey", "Truckasaurus", "Field Agent", "Active",49.00,12"ISIS");
            Employee Berry = new Employee("Berry", "", "Truckasaurus", "Field Agent", "Active", 23.75, 18.50"CIA");


            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            
            if (strCodeName == null)
            {
                return new OkObjectResult("Employee Not Found");
            } else
            {
                if(strCodeName == "Duchess")
                {
                    return new OkObjectResult(Archer);
                } else if (strCodeName == "Truckasaurus")
                {
                    return new OkObjectResult(Lana);
                } else
                {
                    return new OkObjectResult("Employee Not Found");
                }
                
            }
            
           
        }
    }
}

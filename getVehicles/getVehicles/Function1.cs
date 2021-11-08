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

namespace getVehicles
{
    public static class getVehicles
    {
        private class Vehicle
        {
            public string Make { get; set; }
            public string Model { get; set; }
            public int Year { get; set; }
            public string VIN { get; set; }
            public int MPL { get; set; }
            public Vehicle(string strMake, string strModel, int intYear, string strVIN, int intMPL)
            {
                Make = strMake;
                Model = strModel;
                Year = intYear;
                VIN = strVIN
                MPL =  intMPL;
            }

        }
        [FunctionName("getVehicles")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string strMake = req.Query["Make"];
            string strModel = req.Query["Model"];
            log.LogInformation("HTTP trigger function processed a request for:" + strMake + strModel);

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);

            Vehicle Ford = new Vehicle("2022","Ford", "Maverick", "VIN-78re540jk93j", "31 MPG");
            Vehicle Toyota = new Vehicle("2010","Toyota", "15 East Broad st.", "Cookeville", "TN", "38583");
            Vehicle Mercedes = new Vehicle("1990","Mercedes", "UniMog", "VIN-MIL839", "2.6 MPG");

            List<Vehicle> arrVehicle = new List<Vehicle>();
            arrVehicle.Add(Ford);
            arrVehicle.Add(Toyota);
            arrVehicle.Add(Mercedes);
            

            List<Vehicle> lstfound = new List<Vehicle>();

            foreach (Vehicle vehcurrent in arrVehicle)
            {
                if (strMake == vehcurrent.Vehicle.Name && strModel == vehcurrent.Model)
                {
                    lstfound.Add(vehcurrent);
                }
            }

            return new OkObjectResult(lstfound);
        }
    }
}

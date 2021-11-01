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

namespace Vehicles_db
{
    public static class getVehiclesdb
    {
        private class Vehicles
        {
            public string Make { get; set; }
            public string Model { get; set; }
            public int Year { get; set; }
            public string VIN { get; set; }
            public string Armored { get; set; }
            public Vehicles(string strMake, string strModel, int intYear, string strVIN, string strArmored)
            {
                Make = strMake;
                Model = strModel;
                Year = intYear;
                VIN = strVIN;
                Armored = strArmored;
            }
        }
        [FunctionName("addVehicles")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string strMake = req.Query["strMake"];
            string strModel = req.Query["strModel"];
            int intYear = int.Parse(req.Query["intYear"]);
            string strArmored = req.Query["blnArmored"];
            bool blnArmored = false;
            if (strArmored == "true")
            (
                blnArmored = true;
            )
            string strVIN = req.Query["strVIN"];
           

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            Vehicles Ford = new Vehicles("Ford", "10 East Broad st.", "Cookeville", "TN", "38583");
            Vehicles Toyota = new Vehicles("Toyota", "15 East Broad st.", "Cookeville", "TN", "38583");
            Vehicles Volkswagon = new Vehicles("Volkswagon", "20 East Broad st.", "Cookeville", "TN", "38583");

            Vehicles F150 = new Vehicles(Ford, "F150", 2021, 12);
            Vehicles Ranger = new Vehicles(Ford, "Ranger", 2021, 12);
            Vehicles Titan = new Vehicles(Toyota, "Titan", 2021, 12);
            Vehicles Cobalt = new Vehicles(Toyota, "Cobalt", 2021, 12);
            Vehicles Beetle = new Vehicles(Volkswagon, "Beetle", 2021, 12);
            Vehicles Golf = new Vehicles(Volkswagon, "Golf", 2021, 12);


        }

            return new OkObjectResult(lstfound);
        }
    }
}
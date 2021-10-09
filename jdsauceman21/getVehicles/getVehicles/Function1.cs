using System;
using System.IO;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace getVehicles
{
    public static class getVehicles
    {
        private class Brand
        {
            public string Name {get;set;}
            public string Address { get; set; }
            public string City { get; set; }
            public string State { get; set; }
            public string Zip { get; set; }
            public Brand(string strName, string strAddress, string strCity, string strState, string strZip)
            {
                Name = strName;
                Address = strAddress;
                City = strCity;
                State = strState;
                Zip = strZip;
            }

        }
        private class Vehicle
        {
            public Brand Brand { get; set; }
            public string Model { get; set; }
            public int Year { get; set; }
            public double GallonsPer100Miles { get; set; }
            public Vehicle(Brand BrandMake, string strModel, int intYear, double dblMilesPerGallon )
            {
                Brand = BrandMake;
                Model = strModel;
                Year = intYear;
                GallonsPer100Miles = 100/dblMilesPerGallon;
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

            Brand Ford = new Brand("Ford", "10 East Broad st.", "Cookeville", "TN", "38583");
            Brand Toyota = new Brand("Toyota", "15 East Broad st.", "Cookeville", "TN", "38583");
            Brand Volkswagon = new Brand("Volkswagon", "20 East Broad st.", "Cookeville", "TN", "38583");

            Vehicle F150 = new Vehicle(Ford, "F150", 2021, 12);
            Vehicle Ranger = new Vehicle(Ford, "Ranger", 2021, 12);
            Vehicle Titan = new Vehicle(Toyota, "Titan", 2021, 12);
            Vehicle Cobalt = new Vehicle(Toyota, "Cobalt", 2021, 12);
            Vehicle Beetle = new Vehicle(Volkswagon, "Beetle", 2021, 12);
            Vehicle Golf = new Vehicle(Volkswagon, "Golf", 2021, 12);


            List<Vehicle> arrVehicle = new List<Vehicle>();
                arrVehicle.Add(F150);
                arrVehicle.Add(Ranger);
                arrVehicle.Add(Titan);
                arrVehicle.Add(Cobalt);
                arrVehicle.Add(Beetle);
                arrVehicle.Add(Golf);

            List<Vehicle> lstfound = new List<Vehicle> ();

            foreach (Vehicle vehcurrent in arrVehicle)
            {
                if (strMake == vehcurrent.Brand.Name && strModel == vehcurrent.Model)
                {
                    lstfound.Add(vehcurrent);
                }
            }
            
            return new OkObjectResult(lstfound);
        }
    }
}

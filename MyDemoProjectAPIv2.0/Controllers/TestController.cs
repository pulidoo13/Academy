using MyDemoProjectAPIv2._0.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data.Entity;
using System.Web.Mvc;

namespace MyDemoProjectAPIv2._0.Controllers

{
    [EnableCors(origins: "http://localhost:63413", headers: "*", methods: "*")]
    public class TestController : ApiController
    {
        private MarketEntities db = new MarketEntities();
        // GET: Test
        public Object GET()
        {
            //var products = db.Products.AsEnumerable();
            //var images = db.ProductImages.AsEnumerable();

            var products = db.Products;
            products.Select(x => x.ID).First();

            return products;
        }
    }
}
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
    public class ProductsController : ApiController
    {
        
        private MyCompanyEntities db = new MyCompanyEntities();
        // GET: API-Products
        public IEnumerable<Product> Get()
        {
            var products = db.Products.AsEnumerable();

            return products.ToList();
        }
    }
}
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
    //Puerto 63041 es de WebAPI
    //Puerto 63413 es de WebApp
    [EnableCors(origins: "http://localhost:63413", headers: "*", methods: "*")]
    public class ProductsController : ApiController
    {
        
        private MarketEntities db = new MarketEntities();
        // GET: API-Products
        public IEnumerable<Object> GET()
        {
            var products = db.Products.AsEnumerable();
            var categories = db.Categories.AsEnumerable();
            var images = db.ProductImages.AsEnumerable();

            //var prod = products.Join(images, p => p.ID, img => img.ProductID, (p, img) => new { p.Name, p.Description, p.Model, p.Price, img.iDescription, img.ImageURL }).ToList();

            //return prod.ToList();
            return products.ToList();
        }
    }
}
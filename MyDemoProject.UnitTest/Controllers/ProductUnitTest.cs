using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;
using MyProducts.AdminSite;
using MyProducts.AdminSite.Controllers;
using MyProducts.AdminSite.Models;
using System.Web.Mvc;



namespace MyDemoProject.UnitTest
{
    [TestClass]
    public class ProductUnitTest
    {
        [TestMethod]
        public void Index()
        {

            ProductsController controller = new ProductsController();
            ViewResult result = controller.Index() as ViewResult;
            Assert.IsNotNull(result);

        }

        [TestMethod]
        public void Details()
        {
            ProductsController controller = new ProductsController();
            ViewResult result = controller.Details(1) as ViewResult;
            result.Model.Equals(controller.Details(1));
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void CreateGet()
        {
            var controller = new ProductsController();
            ViewResult result = controller.Create() as ViewResult;
            Assert.IsNotNull(result);

        }

        [TestMethod]
        public void CreatePost()
        {
            ProductsController controller = new ProductsController();
            Product product = new Product();
            product.Name = "New Cellphone";
            product.CategoryID = 1;
            ViewResult result = controller.Create(product) as ViewResult;
            Assert.IsTrue(product.ID > 0);

        }


        [TestMethod]
        public void EditGet()
        {
            ProductsController controller = new ProductsController();
            ViewResult result = controller.Edit(1) as ViewResult;
            Assert.IsNotNull(result);
        }

        //[TestMethod]
        //public void EditPost()
        //{
        //    ProductsController controller = new ProductsController();
        //    var product = new Product();
        //    product.ID = 1;

        //    ViewResult result = controller.Edit(1) as ViewResult;
        //}
               
    }
}

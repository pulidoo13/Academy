//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyDemoProjectAPIv2._0.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ProductImage
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }
        public Nullable<bool> Active { get; set; }
        public Nullable<int> ProductID { get; set; }
        public Nullable<System.DateTime> CreateDateTime { get; set; }
        public Nullable<System.DateTime> UpdateDateTime { get; set; }
    
        public virtual Product Product { get; set; }
    }
}
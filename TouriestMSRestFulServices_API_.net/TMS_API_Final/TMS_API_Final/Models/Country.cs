using System;
using System.Collections.Generic;

#nullable disable

namespace TMS_API_Final.Models
{
    public partial class Country
    {
        //public Country()
        //{
        //    Tourists = new HashSet<Tourist>();
        //}

        public int CountryId { get; set; }
        public string CountryName { get; set; }

     //   public virtual ICollection<Tourist> Tourists { get; set; }
    }
}

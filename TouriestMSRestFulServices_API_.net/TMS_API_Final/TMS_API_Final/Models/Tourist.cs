using System;
using System.Collections.Generic;

#nullable disable

namespace TMS_API_Final.Models
{
    public partial class Tourist
    {
        public int TouristId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfArrival { get; set; }
        public long ContactNo { get; set; }
        public int? CountryId { get; set; }

     // public virtual Country Country { get; set; }
    }
}

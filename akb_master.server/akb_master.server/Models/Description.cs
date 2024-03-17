using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace akb_master.server.Models
{
    public class Description
    {
        [Key]
        public int Id { get; set; } 

        public string Country { get; set; }

        public string Polarity { get; set; }

        public string Dimensions { get; set; }

        public string Capacity { get; set; }

        public string Starting_current { get; set; }

        public string Performance {  get; set; }

        public string Guarantee { get; set; }


        public ICollection<Product> Products { get; set; }

    }
}

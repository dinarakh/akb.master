using akb_master.server.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace akb_master.server.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public int Price { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }

        public Category Category{ get; set; }

        [ForeignKey("Description")]
        public int DescriptionId { get; set; }

        public Description Description { get; set; }

        public ICollection<ProductImage> ProductImages  { get; set; }

    }
}



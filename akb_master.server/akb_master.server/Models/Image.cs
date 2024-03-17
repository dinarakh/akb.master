using System.ComponentModel.DataAnnotations;

namespace akb_master.server.Models
{
    public class Image
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<ProductImage> ProductImages { get; set;}
    }
}

using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace akb_master.server.Models
{
    [Keyless]
    public class ProductImage
    {
        [ForeignKey("Product")]
        public int ProductId { get; set; }

        public Product Product { get; set; }

        [ForeignKey("Image")]
        public int ImageId { get; set; }

        public Image Image { get; set; }

    }
}

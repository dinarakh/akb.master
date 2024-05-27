using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace akb_master.server.Models
{
    public class Image
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Column("Image")]
        public Guid? ImageGuid { get; set; }
        public string Name => ImageGuid == null ? "/Images/default.jpg" : $"../Images/{ImageGuid}.jpg";
        public byte[] ByteImage { get; set; }
        public ICollection<ProductImage> ProductImages { get; set; }
    }
}

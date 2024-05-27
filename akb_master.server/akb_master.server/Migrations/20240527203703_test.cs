using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace akb_master.server.Migrations
{
    /// <inheritdoc />
    public partial class test : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "ByteImage",
                table: "Images",
                type: "image",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "bytea");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "ByteImage",
                table: "Images",
                type: "bytea",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "image");
        }
    }
}

using Microsoft.AspNetCore.Cors.Infrastructure;

namespace akb_master.server
{
    public class App
    { 
                   
        public static class AppCorsConfig
        {
            public static Action<CorsPolicyBuilder> CorsPolicyBuilder()
            {
                return builder =>
                {
                    builder
                    .WithOrigins("http://localhost:7271", "https://localhost:7271", "http://localhost:3000", "https://localhost:3000")
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                };
            }
        }

    }
} 

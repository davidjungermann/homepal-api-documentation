using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using HomepalMockAPI.DatabaseConfiguration;
using HomepalMockAPI.DAL;
using System;
using System.IO;

namespace HomepalMockAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Homepal Mock API", Version = "v1" });
                var filePath = Path.Combine(System.AppContext.BaseDirectory, "HomepalMockAPI.xml");
                c.IncludeXmlComments(filePath);
            });

            services.AddSingleton(new DatabaseConfig { Name = Configuration["DatabaseName"] });
            services.AddSingleton<IDatabaseBootstrap, DatabaseBootstrap>();
            services.AddSingleton<IBuildingsRepository, BuildingsRepository>();
            services.AddSingleton<IRegionsRepository, RegionsRepository>();
            services.AddSingleton<IRealEstatesRepository, RealEstatesRepository>();
            services.AddSingleton<IAgentsRepository, AgentsRepository>();
            services.AddSingleton<ICustomersRepository, CustomersRepository>();
            services.AddSingleton<IOwnersRepository, OwnersRepository>();
            services.AddSingleton<ILeasablesRepository, LeasablesRepository>();
            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app,
            IWebHostEnvironment env,
            IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseSwagger();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseRouting();
            app.UseCors();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
            serviceProvider.GetService<IDatabaseBootstrap>().SetupDbFromFile();
        }
    }
}

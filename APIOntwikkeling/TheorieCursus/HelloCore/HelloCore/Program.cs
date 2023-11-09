using HelloCore;

public static void Main(string[] args)
{
    CreateHostBuilder(args).Build().Run();
}


await Host.CreateDefaultBuilder(args)
    .ConfigureWebHostDefaults(webBuilder =>
    {
        webBuilder.UseStartup<Startup>();
    })
    .Build()
    .RunAsync();
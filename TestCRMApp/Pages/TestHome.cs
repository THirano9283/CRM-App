using Bunit;
using Microsoft.Extensions.DependencyInjection;
using CRMApp.Pages;
using CRMApp.ECommerce;
using CRMApp.Northwind;
using CRMApp.CRMAppData;

namespace TestCRMApp
{
	[Collection("CRMApp")]
	public class TestHome
	{
		[Fact]
		public void ViewIsCreated()
		{
			using var ctx = new TestContext();
			ctx.JSInterop.Mode = JSRuntimeMode.Loose;
			ctx.Services.AddIgniteUIBlazor(
				typeof(IgbCategoryChartModule),
				typeof(IgbGridModule),
				typeof(IgbListModule),
				typeof(IgbAvatarModule),
				typeof(IgbChipModule));
			ctx.Services.AddScoped<IECommerceService>(sp => new MockECommerceService());
			ctx.Services.AddScoped<INorthwindService>(sp => new MockNorthwindService());
			ctx.Services.AddScoped<ICRMAppDataService>(sp => new MockCRMAppDataService());
			var componentUnderTest = ctx.RenderComponent<Home>();
			Assert.NotNull(componentUnderTest);
		}
	}
}

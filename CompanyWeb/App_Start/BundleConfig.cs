using System.Web;
using System.Web.Optimization;

namespace CompanyWeb
{
    public class BundleConfig
    {
        // Para obtener más información sobre las uniones, visite https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            #region JS
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Utilice la versión de desarrollo de Modernizr para desarrollar y obtener información. De este modo, estará
            // para la producción, use la herramienta de compilación disponible en https://modernizr.com para seleccionar solo las pruebas que necesite.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/js/Jquery").Include(
                    "~/assets/plugins/jquery/jquery-3.3.1.min.js"));

            bundles.Add(new ScriptBundle("~/js/LayerSlider").Include(
                    "~/assets/plugins/slider.layerslider/js/layerslider_pack.js",
                    "~/assets/plugins/slider.layerslider/plugins/origami/layerslider.origami.js"));

            bundles.Add(new ScriptBundle("~/js/Scripts").Include(
                    "~/assets/js/scripts.js"));
            
            #endregion

            #region CSS
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Css/CoreCss").Include(
                    "~/assets/plugins/bootstrap/css/bootstrap.min.css"));

            bundles.Add(new StyleBundle("~/Css/LayerSlider").Include(
                    "~/assets/plugins/slider.layerslider/css/layerslider.css",
                    "~/assets/plugins/slider.layerslider/plugins/origami/layerslider.origami.css"));

            bundles.Add(new StyleBundle("~/Css/Theme").Include(
                    "~/assets/css/essentials.css",
                    "~/assets/css/layout.css"));

            bundles.Add(new StyleBundle("~/Css/LevelScripts").Include(
                    "~/assets/css/header-1.css",
                    "~/assets/css/color_scheme/green.css"));
            #endregion
        }
    }
}

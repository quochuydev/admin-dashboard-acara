import React from "react";
/// React router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/// Css
import "./index.css";
import "./chart.css";
import "./step.css";

/// Dashboard
import Home from "./components/Dashboard/Home";
import Analytics from "./components/Dashboard/Analytics";
import Customers from "./components/Dashboard/Customers";
import Event from "./components/Dashboard/Event";
import EventDetail from "./components/Dashboard/EventDetail";
import Reviews from "./components/Dashboard/Reviews";

/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import PostDetails from "./components/AppsMenu/AppProfile/PostDetails";
import Calendar from "./components/AppsMenu/Calendar/Calendar";
import Compose from "./components/AppsMenu/Email/Compose/Compose";
import Inbox from "./components/AppsMenu/Email/Inbox/Inbox";
import Read from "./components/AppsMenu/Email/Read/Read";
import Checkout from "./components/AppsMenu/Shop/Checkout/Checkout";
import EcoCustomers from "./components/AppsMenu/Shop/Customers/Customers";
import Invoice from "./components/AppsMenu/Shop/Invoice/Invoice";
import ProductDetail from "./components/AppsMenu/Shop/ProductGrid/ProductDetail";
import ProductGrid from "./components/AppsMenu/Shop/ProductGrid/ProductGrid";
import ProductList from "./components/AppsMenu/Shop/ProductList/ProductList";
import ProductOrder from "./components/AppsMenu/Shop/ProductOrder";


/// Bootstrap
import UiAccordion from "./components/bootstrap/Accordion";
import UiAlert from "./components/bootstrap/Alert";
import UiBadge from "./components/bootstrap/Badge";
import UiButton from "./components/bootstrap/Button";
import UiButtonGroup from "./components/bootstrap/ButtonGroup";
import UiCards from "./components/bootstrap/Cards";
import UiCarousel from "./components/bootstrap/Carousel";
import UiDropDown from "./components/bootstrap/DropDown";
import UiGrid from "./components/bootstrap/Grid";
import UiListGroup from "./components/bootstrap/ListGroup";
import UiMediaObject from "./components/bootstrap/MediaObject";
import UiModal from "./components/bootstrap/Modal";
import UiPagination from "./components/bootstrap/Pagination";
import UiPopOver from "./components/bootstrap/PopOver";
import UiProgressBar from "./components/bootstrap/ProgressBar";
import UiTab from "./components/bootstrap/Tab";
import UiTypography from "./components/bootstrap/Typography";

/// Charts
import SparklineChart from "./components/charts/Sparkline";
import ApexChart from "./components/charts/apexcharts";
import Chartist from "./components/charts/chartist";
import ChartJs from "./components/charts/Chartjs";
import RechartJs from "./components/charts/rechart";

/// Form
import Element from "./components/Forms/Element/Element";
import jQueryValidation from "./components/Forms/jQueryValidation/jQueryValidation";
import Pickers from "./components/Forms/Pickers/Pickers";
import SummerNote from "./components/Forms/Summernote/SummerNote";
import Wizard from "./components/Forms/Wizard/Wizard";

/// Plugins
import Select2 from "./components/PluginsMenu/Select2/Select2";
import MainSweetAlert from "./components/PluginsMenu/Sweet Alert/SweetAlert";
import Toastr from "./components/PluginsMenu/Toastr/Toastr";
import JqvMap from "./components/PluginsMenu/Jqv Map/JqvMap";
import Nestable from "./components/PluginsMenu/Nestable/Nestable";
import MainNouiSlider from "./components/PluginsMenu/Noui Slider/MainNouiSlider";



/// Table
import DataTable from "./components/table/DataTable";
import BootstrapTable from "./components/table/BootstrapTable";


/// Layout
import Footer from "./layouts/Footer";
import Nav from "./layouts/nav";

/// Pages
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import ForgotPassword from "./pages/ForgotPassword";
import LockScreen from "./pages/LockScreen";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

/// Widget
import Widget from "./pages/Widget";


const Markup = () => {
  const routes = [
    /// Dashboard
    { url: "", component: Home },
    { url: "event", component: Event },
    { url: "event-detail", component: EventDetail },
    { url: "customers", component: Customers },
    { url: "analytics", component: Analytics },
    { url: "reviews", component: Reviews },

    /// Apps
    { url: "app-profile", component: AppProfile },
    { url: "email-compose", component: Compose },
    { url: "email-inbox", component: Inbox },
    { url: "email-read", component: Read },
    { url: "app-calender", component: Calendar },
    { url: "post-details", component: PostDetails },

    /// Chart
    { url: "chart-sparkline", component: SparklineChart },
    { url: "chart-chartjs", component: ChartJs },
    { url: "chart-chartist", component: Chartist },
    { url: "chart-apexchart", component: ApexChart },
    { url: "chart-rechart", component: RechartJs },

    /// Bootstrap
    { url: "ui-alert", component: UiAlert },
    { url: "ui-badge", component: UiBadge },
    { url: "ui-button", component: UiButton },
    { url: "ui-modal", component: UiModal },
    { url: "ui-button-group", component: UiButtonGroup },
    { url: "ui-accordion", component: UiAccordion },
    { url: "ui-list-group", component: UiListGroup },
    { url: "ui-media-object", component: UiMediaObject },
    { url: "ui-card", component: UiCards },
    { url: "ui-carousel", component: UiCarousel },
    { url: "ui-dropdown", component: UiDropDown },
    { url: "ui-popover", component: UiPopOver },
    { url: "ui-progressbar", component: UiProgressBar },
    { url: "ui-tab", component: UiTab },
    { url: "ui-pagination", component: UiPagination },
    { url: "ui-typography", component: UiTypography },
    { url: "ui-grid", component: UiGrid },

    /// Plugin
    { url: "uc-select2", component: Select2 },
    { url: "uc-nestable", component: Nestable },
    { url: "uc-noui-slider", component: MainNouiSlider },
    { url: "uc-sweetalert", component: MainSweetAlert },
    { url: "uc-toastr", component: Toastr },
    { url: "map-jqvmap", component: JqvMap },

    /// Widget
    { url: "widget-basic", component: Widget },

    /// Shop
    { url: "ecom-product-grid", component: ProductGrid },
    { url: "ecom-product-list", component: ProductList },
    { url: "ecom-product-detail", component: ProductDetail },
    { url: "ecom-product-order", component: ProductOrder },
    { url: "ecom-checkout", component: Checkout },
    { url: "ecom-invoice", component: Invoice },
    { url: "ecom-product-detail", component: ProductDetail },
    { url: "ecom-customers", component: EcoCustomers },

    /// Form
    { url: "form-element", component: Element },
    { url: "form-wizard", component: Wizard },
    { url: "form-wizard", component: Wizard },
    { url: "form-editor-summernote", component: SummerNote },
    { url: "form-pickers", component: Pickers },
    { url: "form-validation-jquery", component: jQueryValidation },

    /// table
    { url: "table-datatable-basic", component: DataTable },
    { url: "table-bootstrap-basic", component: BootstrapTable },

    /// pages
    { url: "page-register", component: Registration },
    { url: "page-lock-screen", component: LockScreen },
    { url: "page-login", component: Login },
    { url: "page-forgot-password", component: ForgotPassword },
    { url: "page-error-400", component: Error400 },
    { url: "page-error-403", component: Error403 },
    { url: "page-error-404", component: Error404 },
    { url: "page-error-500", component: Error500 },
    { url: "page-error-503", component: Error503 },
  ];

  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  let pagePath = path.split("-").includes("page");
  return (
    <Router basename="/react/demo">
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"} ${
          !path ? "right-profile" : ""
        }`}
      >
        {!pagePath && <Nav />}

        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{ minHeight: window.screen.height - 60 }}
          >
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
    </Router>
  );
};

export default Markup;

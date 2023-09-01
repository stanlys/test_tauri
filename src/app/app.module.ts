import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DxButtonComponent, DxButtonModule, DxTabPanelModule, DxListModule } from "devextreme-angular";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, DxTabPanelModule, DxButtonModule, DxListModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

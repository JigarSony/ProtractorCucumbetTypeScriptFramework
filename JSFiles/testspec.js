"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./PageObjects/calculator");
const angularhomepage_1 = require("./PageObjects/angularhomepage");
describe('Chain Locators Demo', () => {
    it('Open Angular js WebSite', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        //repeter, chain locators, css for identical tags
        //await element(by.model("first")).sendKeys("4");
        let calc = new calculator_1.calculator();
        yield calc.firstEditBox.sendKeys("8");
        //
        yield protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='DIVISION']")).click();
        //
        //await element(by.model("second")).sendKeys("2");
        yield calc.secondEditBox.sendKeys("4");
        //await element(by.id("gobutton")).click();
        yield calc.go.click();
        //repeater
        //element(by.repeater("result in memory"))
        //ElementChaining
        //element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text) {
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
    xit('Angular Home Page Title Verification', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angularjs.org/");
        let angularhomepage = new angularhomepage_1.angularHomrPage();
        //await element(by.linkText("angular.io")).click();
        yield angularhomepage.angularLink.click();
        //await element(by.css("input[type='search']")).sendKeys("Hello");
        yield angularhomepage.search.sendKeys("Hello");
        //await browser.getTitle();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWtEO0FBRWxELHlEQUFzRDtBQUN0RCxtRUFBZ0U7QUFFaEUsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtJQUVqQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBUyxFQUFFO1FBRXJDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUVoRSxpREFBaUQ7UUFFakQsaURBQWlEO1FBRWpELElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQzVCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsRUFBRTtRQUNGLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hGLEVBQUU7UUFDRixrREFBa0Q7UUFFbEQsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QywyQ0FBMkM7UUFDM0MsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRCLFVBQVU7UUFDViwwQ0FBMEM7UUFFMUMsaUJBQWlCO1FBQ2pCLDZHQUE2RztRQUM3RyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsc0NBQXNDLEVBQUUsR0FBUyxFQUFFO1FBRW5ELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU1QyxJQUFJLGVBQWUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUU1QyxtREFBbUQ7UUFFbkQsTUFBTSxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTFDLGtFQUFrRTtRQUVsRSxNQUFNLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLDJCQUEyQjtJQUUvQixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==
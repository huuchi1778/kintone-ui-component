import { expect, fixture } from "@open-wc/testing";
import { MobileDatePicker } from "../index";

describe("MobileDatePicker", () => {
  describe("label", () => {
    it("visible when initializing without props option", async () => {
      const container = new MobileDatePicker({});
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLSpanElement;
      expect(labelEl.innerText).to.have.equal("");
    });

    it('should be equal "options-label" when initializing label with "options-label"', async () => {
      const container = new MobileDatePicker({ label: "options-label" });
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLSpanElement;
      expect(labelEl.innerText).to.have.equal("options-label");
    });

    it('should be replace by "replace-label" when changing by setter', async () => {
      const container = new MobileDatePicker({
        label: "options-label",
      });
      container.label = "replace-label";
      const el = await fixture(container);
      const labelEl = el.querySelector(
        ".kuc-base-mobile-label__text"
      ) as HTMLSpanElement;
      expect(labelEl.textContent).to.have.equal("replace-label");
    });
  });
});

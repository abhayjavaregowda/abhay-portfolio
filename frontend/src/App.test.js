import PortfolioContent from "./data/PortfolioContent";

test("contains Abhay's portfolio identity and contact links", () => {
  expect(PortfolioContent.hero.name).toBe("Abhay");
  expect(PortfolioContent.contact.info[0].value).toBe(
    "abhayjavaregowda@gmail.com",
  );
  expect(PortfolioContent.contact.social.map((social) => social.name)).toEqual([
    "GitHub",
    "LinkedIn",
  ]);
});

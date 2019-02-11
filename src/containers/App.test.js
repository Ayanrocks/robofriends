import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("Expect to render App component", () => {
	const mockStore = {
		robots: [],
		searchField: ""
	};
	expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
});

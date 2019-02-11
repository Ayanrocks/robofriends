import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

it("Expect to render CardList component", () => {
	const mockRobots = [
		{
			id: 1,
			name: "John Snow",
			username: "JOhs",
			email: "Josh@doe"
		}
	];
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});

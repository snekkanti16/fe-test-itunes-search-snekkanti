import React from "react";
import { render } from "@testing-library/react";
import Card from './index';
import {mockTrackData, mockCollectionData} from "./mockCardData";

describe("/", () => {
    it("should render the Track Card", () => {
      const { container } = render(<Card {...mockTrackData} />);
      expect(container).toMatchSnapshot();
    });
    it("should render the Album Card", async () => {
        const { container } = render(<Card {...mockCollectionData} />);
        expect(container).toMatchSnapshot();
    });
  });
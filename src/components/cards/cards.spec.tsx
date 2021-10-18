import React from "react";
import { render, waitFor, fireEvent, act } from "@testing-library/react";
import configureStore from '../../store/store';
import { Provider as ReduxProvider } from 'react-redux';
import { combineReducers } from 'redux';
import Cards from './index';
import {mockItunesStore, mockItunesData} from "./mockCardsData";
import { createStore } from "redux";
import applicationReducer from '../../store/application/reducers';
import mockedAxios from 'axios';

const store = configureStore();

jest.mock("axios");
describe("/", () => {
  
    it("should render With iTunes Search Form", async () => {
      mockedAxios.get = jest.fn().mockResolvedValue({ data : mockItunesData });
      const { container } = render(<ReduxProvider store={store}>
          <div>
        <>
    <h3> iTunes Search </h3>
    <Cards/>
    </>
    </div>
        </ReduxProvider>);
      expect(container).toMatchSnapshot();
    });

    it("should render Cards", async () => {
        mockedAxios.get = jest.fn().mockResolvedValue({ ...mockItunesData });
        const mockStore = createStore(combineReducers({
            application: applicationReducer,
          }), {application : { ituneResults : mockItunesStore}});
        const {  getByTestId } = render(<ReduxProvider store={mockStore}>
            <div>
          <>
      <h3> iTunes Search </h3>
      <Cards/>
      </>
      </div>
          </ReduxProvider>);
        await waitFor(() => getByTestId("loader"));
        const infScrollElem = getByTestId("infScroll");
      expect(infScrollElem).toMatchSnapshot();
      });

    it("should render on itunes Search", async () => {
        mockedAxios.get = jest.fn().mockResolvedValue({ ...mockItunesData });
        const { getByText, getByTestId } = render(<ReduxProvider store={store}>
            <div>
          <>
      <h3> iTunes Search </h3>
      <Cards/>
      </>
      </div>
          </ReduxProvider>);
        const searchBtnEle = getByText("Search");
        fireEvent.click(searchBtnEle);
        await waitFor(() => getByTestId("loader"));
        const infScrollElem = getByTestId("infScroll");
      expect(infScrollElem).toMatchSnapshot();
      });

    /*it("should render Home with two Launch Records with Mission Name Crew", async () => {
      mockedAxios.get = jest.fn().mockResolvedValue({ data : data });
      const { getByText, getByRole, getByPlaceholderText } = render(<ReduxProvider store={store}>
        <div>
          <Home/>
        </div>
        </ReduxProvider>);
        const searchEle = getByPlaceholderText("Search By Mission Name");
        fireEvent.change(searchEle,{ target: { value: 'Crew' }});
      await waitFor(() => getByText("Flight Number"));
      const elem = getByRole("grid");
      expect(elem).toMatchSnapshot();
      expect(getByText("1-2 of 2")).toBeInTheDocument()
    });

    it("should render Home with 50 Launch Records with Mission Name Empty", async () => {
      mockedAxios.get = jest.fn().mockResolvedValue({ data : data });
      const { getByText, getByRole, getByPlaceholderText } = render(<ReduxProvider store={store}>
        <div>
          <Home/>
        </div>
        </ReduxProvider>);
        const searchEle = getByPlaceholderText("Search By Mission Name");
        fireEvent.change(searchEle,{ target: { value: '' }});
      await waitFor(() => getByText("Flight Number"));
      const elem = getByRole("grid");
      expect(elem).toMatchSnapshot();
      expect(getByText("1-50 of 50")).toBeInTheDocument()
    });*/
  });

function sleep(arg0: number): Promise<void> {
    throw new Error("Function not implemented.");
}

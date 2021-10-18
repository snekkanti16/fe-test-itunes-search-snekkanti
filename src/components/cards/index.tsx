import React, { useState} from 'react';
import { RootState } from '../../store/index';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../../store/application/types';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '../card/index';
import {thunkGetItunesResult} from '../../store/application/thunks';
import  ImageList  from '@material-ui/core/ImageList';
import InfiniteScroll from "react-infinite-scroller";

import './index.css'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center'
    }
  })
);

const Cards = () => {
  const [searchTerm, setSearchTerm] =  useState("John");
  const classes = useStyles();
  const getItunesResult = (name: string) => dispatch(thunkGetItunesResult(name));
  const ituneResultsState : types.ItuneResults = useSelector((state: RootState) => state.application.ituneResults);
  const [items, setItems] = useState<types.ItuneResult[]>(ituneResultsState.slice(0,10))
  const dispatch = useDispatch();
  
  const searchByTerm = (name: string) => {
    setItems([]);
    getItunesResult(name)
  };

  const loadMoreItems = () => {
        setItems(prevState => {
          const newItems = ituneResultsState.slice(items.length,items.length+10);
          return [...prevState, ...newItems];
        });
  };

  return (
    <div>
      <form  className='textBox' onSubmit={(e) => e.preventDefault()}>
        <div>
      <input id="searchTerm" type ='search' placeholder='Search By Term' value={searchTerm}   onChange={(event) => setSearchTerm(event.target.value)}/>
      <button onClick={() => searchByTerm(searchTerm)}>Search</button>
      </div>
      </form>
     

      <div className={classes.root}>
      <InfiniteScroll data-testid="infScroll"
              pageStart={0}
              loadMore={loadMoreItems}
              hasMore={items < ituneResultsState}
              loader={
                <div className="loader" data-testid="loader" key={0}>
                  Loading ...
                </div>
              }
            >
          <ImageList>
            {items && items.map((item : types.ItuneResult, index: number) => {
                return (<Card {...item}></Card>);
            })
            }
          </ImageList>
          </InfiniteScroll>
      </div>
    </div>
  );
};

export default Cards;

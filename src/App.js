import React, { useState } from 'react';
import './App.css';
import data from './data/data';

function DateTimePretty({ date }) {
  const dateNow = new Date();
  const datePublication = new Date(date);
  const dateDifference = Math.round((dateNow.getTime() - datePublication.getTime()) / 60000);
  let dateFormatted = null;
  if (dateDifference < 60) {
    dateFormatted = `${dateDifference} минут назад`;
  } else if (dateDifference < 60 * 24) {
    dateFormatted = `${Math.ceil(dateDifference / 60)} часов назад`;
  } else {
    dateFormatted = `${Math.ceil(dateDifference / 1440)} дней назад`;
  }

  return (
    <DateTime date={dateFormatted} />
  )
}

function DateTime({ date }) {
  return (
    <p className="date">{date}</p>
  )
}

function Video(props) {
  return (
    <div className="video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimePretty date={props.date} />
    </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} key={item.id} />);
}

export default function App() {

  return (
    <VideoList list={data} />
  );
}
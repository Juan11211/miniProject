// disbling allows any type
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { getAllNotes } from '../redux/actions/notesActions';

function AlloNotes() {
  const dispatch = useAppDispatch();
  const allNotes = useAppSelector(state => state.notesSetStateSlice.allNotes);

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);

  return (
    <React.Fragment>
      {allNotes.map((item: any) => (
        <div key={item.title}>
          {/* Render note details here */}
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </React.Fragment>
  );
}

export default AlloNotes;

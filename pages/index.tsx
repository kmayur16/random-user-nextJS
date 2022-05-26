import type { NextPage } from 'next'
import { createContext, useContext, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import DisplayCard from '../components/DisplayCard'
import GenderSelection from '../components/GenderSelection'
import NationalityDropdown from '../components/NationalityDropdown'
import axios from 'axios';
import { storeUser } from '../redux/reducer/randomUserReducer';

const Home: NextPage = () => {

  const [dispData, setDispData] = useState([]);
  const [gender, setGender] = useState('')
  const [loc, setLoc] = useState('');
  const RandomUserContext = createContext();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.random[0]);

  useEffect(() => {
    // fetch(`https://randomuser.me/api/?results=100`)
    //     .then(response => response.json())
    //     .then(setData);
    const fetchUsers = async () => {
      const { data } = await axios.get('https://randomuser.me/api/?results=100');
      // setData(data);
      dispatch(storeUser(data));
      console.log("datass", data);
    }

    fetchUsers()

  }, [])

  useEffect(() => {
    setDispData(data?.results)
  }, [data])

  useEffect(() => {
    if (gender !== 'all') {
      var genderData;
      genderData = data?.results?.filter(
        (e: any) => e.gender === gender
      );
      setDispData(genderData);
    }
    else {
      setDispData(data?.results);
    }
  }, [gender])

  useEffect(() => {
    if (loc) {
      var locData;
      locData = data?.results?.filter((e: any) => e.nat === loc);
      setDispData(locData)
    }
  }, [loc]);

  function DisplayCards() {
    const randomUser = useContext(RandomUserContext);
    return (
      <DisplayCard randomUser={randomUser} />
    )
  }

  return (
    <div>
      <GenderSelection onChange={(e: any) => {
        setGender(e.target.value);
      }} />
      <div className="nationdiv">
        <NationalityDropdown onChange={(e: any) => setLoc(e.target.value)} value={loc} />
      </div>
      <RandomUserContext.Provider value={dispData}>
        <DisplayCards randomUser={dispData} />
      </RandomUserContext.Provider>
    </div>
  )
}



export default Home
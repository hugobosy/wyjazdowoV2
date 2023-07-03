import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useGetUser} from "@/hooks/queries/useGetUser";
import axios from "axios";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const { data: user, isLoading: userIsLoading } = useGetUser();
    const res = axios.get('http://licznik.wyjazdowo.eu/api/users');
    console.log(res)
  return (
    <>
      <h1>Pała</h1>
    </>
  )
}

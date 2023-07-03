import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useGetUser} from "@/hooks/queries/useGetUser";
import axios from "axios";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: user, isLoading: userIsLoading } = useGetUser();
  //   const res = axios.get('https://licznik.wyjazdowo.eu/api/users');
    console.log(user)
  return (
    <>
    {!userIsLoading && user.map((user: any, index: number) =><p key={index}>{user.login}</p>)}
      </>
  )
}

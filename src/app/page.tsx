import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Authentication from '@/components/Authentication'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  return (
    <main className={styles.main}>
      <Authentication />
    </main>
  )
}

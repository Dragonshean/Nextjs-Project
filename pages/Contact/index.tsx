import ContactInfo from '../../components/ContactInfo';
import GoogleMap from '../../components/GoogleMap';
import Head from 'next/head'






export default function ContactPage () {
    return (
        <>
            <Head>
                <title>凱薩西餐牛排 | 聯絡資訊</title>
            </Head>
            <GoogleMap/>
            <ContactInfo />
        </>
    )
}
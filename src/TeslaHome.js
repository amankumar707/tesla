import TeslaHeader from "./TeslaHeader"
import TeslaSection from "./TeslaSection"
import Footer from "./Footer"
export default function TeslaHome()
{
    return(
        <>
        <TeslaHeader/>
        <TeslaSection name='Model-3'
        tagline='Order Online for Touchless Delivery'
        lbuttontext='CUSTOM ORDER'
        rbuttontext='EXCISTING INVENTORY'
        bgimage='model3.jpg'/>

        <TeslaSection name='Model-Y' 
        tagline='Order Online for Touchless Delivery'
        lbuttontext='CUSTOM ORDER'
        rbuttontext='EXCISTING INVENTORY'
        bgimage='y.jpg'/>

        <TeslaSection name='Model-S'
        tagline='Order Online for Touchless Delivery'
        lbuttontext='CUSTOM ORDER'
        rbuttontext='EXCISTING INVENTORY'
        bgimage='s.jpg'/>

        <TeslaSection name='Model-X'
        tagline='Order Online for Touchless Delivery'
        lbuttontext='CUSTOM ORDER'
        rbuttontext='EXCISTING INVENTORY'
        bgimage='x.jpg'/>

        <TeslaSection name='Solar Panels'
          tagline='Lowest Cost Solar Panels in America '
          lbuttontext='ORDER NOW'
          rbuttontext='LEARN MORE'
          bgimage='sp.jpg'/>

        <TeslaSection name='Solar Roof'
        tagline='Produce Clean Energy From Your Roof '
        lbuttontext='ORDER NOW'
        rbuttontext='LEARN MORE'
        bgimage='sr.webp'/>

<TeslaSection name='Accessories'
        lbuttontext='SHOP NOW'
        bgimage='asce.jpg'/>

        <Footer/>
        </>
    )
}
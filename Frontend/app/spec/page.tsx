import Footer from '@/components/Footer'
import PriceSupport from '@/components/PriceSupport'
import SpecCountry from '@/components/SpecCountry'
import VisaDocuments from '@/components/VisaDocuments'
import VisaRequirementSection from '@/components/VisaRequirementSection'
import VisaSteps from '@/components/VisaSteps'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='flex px-40'>
                <div>
                    <SpecCountry />
                    <VisaRequirementSection />
                    <VisaDocuments />
                    <VisaSteps />
                </div>
                <div>
                    <PriceSupport/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
import React from 'react';
import { FaHeart, FaStar, FaThumbsUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const OurValue = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: 'our_value_construction_title',
      icon: <FaHeart className="text-2xl text-red-500 mb-2" />,
      content: 'our_value_costruction_content'
    },
    {
      title: 'our_value_engagement_title',
      icon: <FaStar className="text-2xl text-yellow-500 mb-2" width={10} height={10} />,
      content: 'our_value_engagement_content'
    },
    {
      title: 'our_value_performance_title',
      icon: <FaThumbsUp className="text-2xl text-green-500 mb-2" />,
      content: 'our_value_performance_content'
    },
  ]
  return (
    <div name="platform" className="w-full mb-32 bg-zinc-200">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center py-16">{t('our_value_title')}</h2>
        <div className="grid lg:grid-cols-3 gap-4 pt-4">
          {data.map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className='py-4'>
                {item.icon}
              </div>
              <div className="">
                <h3 className="font-bold text-lg text-center">{t(item.title)}</h3>
                <p className="text-medium md:text-lg pt-2 pb-4">
                  {t(item.content)}
                </p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default OurValue;

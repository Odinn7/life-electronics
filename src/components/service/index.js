import React, { useState } from "react";
import service from "../../assets/images/service.png";
import programming from "../../assets/images/programming.png";
import consulting from "../../assets/images/consulting.png";
import { Button } from "../buttons";
import {
  ServiceWrapper,
  ServiceCard,
  ServiceCardTitle,
  ServiceImg,
  ServiceCardText,
} from "./styled";

import "./styled";

export const Service = () => {

  const [isOpenItService, setIsOpenItService] = useState(false);
  const [isOpenProgramming, setIsOpenProgramming] = useState(false);
  const [isOpenConsulting, setIsOpenConsulting] = useState(false);

  return (
    <ServiceWrapper id="services">
      <ServiceCard isOpen={isOpenItService}>
        { isOpenItService ? 
        <> 
          <ServiceCardText>
            Life Electronics Şirkəti İT xidmətləri sahəsində fəaliyyəti istifadəçilərin ehtiyaclarının və tələbatlarının araşdırılması, öyrənilməsi və bunun əsasında müştərək texniki tapşırıq formalaşdırmaq üsulu ilə yanaşma prinsipləri üzərində qurulur.
            Bu yanaşmadan qaynaqlanan qarşılıqlı əməkdaşlıq mühitində İT infrastrukturun texniki dəstəyə və təkmilləşməyə ehtiyacı olan bir sıra sahələrində müayinə, rəy, həll, quraşdırma və təhvil vermə, genişləndirilmə, artırılma və yeniləşdirilmə tipli məsələlərin düzgün müəyyənləşdirilməsi və peşəkar həllini tapması mümkün olur.</ServiceCardText> 
          <Button btnText="Close" border color  top hoverColor onClick={() => setIsOpenItService(!isOpenItService)}/>
        </>
         : 
        <>
          <ServiceImg src={service} />
          <ServiceCardTitle>It service</ServiceCardTitle> 
          <Button btnText="Әlavә" border color  top hoverColor onClick={() => setIsOpenItService(!isOpenItService)}/>
        </> 
        }
      </ServiceCard>

      <ServiceCard isOpen={isOpenProgramming}>
        {
        isOpenProgramming ?
        <> 
          <ServiceCardText>
            Life Electronics Şirkəti proqram təminatlarının tətbiqi, optimallaşdırılması, qurulmuş mövcud sistemlərdən istifadə prinsipləri barədə əhatəli məlumat və geniş çeşiddə xidmət təqdim etmək iqtidarındadır.
            Banklar və maliyyə institutları, dövlət idarələri, mobil rabitə operatorları, məlumat bazaları üçün proqramlar müasir informasiya və kommunikasiya texnologiyaları dünyasının daim artmaqda və dəyişməkdə olan ən yüksək tələbatla istifadədə olan məhsullarıdır.
            Onların yerli tələbata uyğunlaşdırılaraq yenidən istehsalı, quraşdırılması və texniki dəstəyinin təmin ediməsi Life Electronics Şirkətinin seçdiyi mühüm hədəflərdir.
            Bu istiqamətlərdə fəaliyyət hər bir sifarişçinin tələbatına uyğun olaraq fərdi qaydada tərtib edilir və münasib formada qurulur. 
            İstifadəçinin İT infrastrukturunu nəzarətdə saxlamaq və vaxtında yenilənmə tələb edən bütün mühüm qovşaqları infrastrukturun peşəkar təftişi yolu ilə qabaqcadan müəyyən edıə bilmək və bu qəbildən olan bir çox sırf peşəkar məsələlər İT sahəsində mükəmməl biliklərə yiyələnmiş və inkişafda olan İT komandanın məsləhət və köməyi ilə doğru həllini tapa bilər.</ServiceCardText>
          <Button btnText="Close" border color  top hoverColor onClick={() => setIsOpenProgramming(!isOpenProgramming)}/>
        </>
          :
        <>
          <ServiceImg src={programming} />  
          <ServiceCardTitle>Proqramming</ServiceCardTitle> 
          <Button btnText="Әlavә" border color  top hoverColor onClick={() => setIsOpenProgramming(!isOpenProgramming)}/>
        </> 
           } 
      </ServiceCard>

      <ServiceCard isOpen={isOpenConsulting}>
      {
        isOpenConsulting ? 
      <> 
        <ServiceCardText>
          Life Electronics Şirkətinin peşəkar konsaltinq xidməti istifadəçilərin hər zaman müraciət edə biləcəyi, münasib və uyğun həllin yollarını müəyyənləşdirən fundamental biliklərə söykənən, yeniləşən və təkmilləşən çevik bir strukturdur.
          Bura daxil olan sorğuların mahiyyətinə uyğun qaydada mütəxəssislər və ekspertlər cəlb edilə bilir. Bu da sorğunun sürətli emalı və doğru cavab formalaşdırılmasından ötrü güclü zəmindir.
          Kompüterlərin, ofis təşkilat texnikasının, məlumat köşklərinin, videomüşahidə sistemlərinin, işinizlə bağlı ümumi istifadədə olan informasiya texnologiyaları avadanlıqlarının mükəmməl işini təşkil etməkdən ötrü Life Electronics Şirkətinin mütəxəssisləri avadanlıqların nizamlanmasını və onlara müntəzəm xidmət göstərilməsini təşkil etmək üçün kifayət qədər təcrübəyə və ehtiyatlara malikdir.</ServiceCardText>
        <Button btnText="Close" border color  top hoverColor onClick={() => setIsOpenConsulting(!isOpenConsulting)}/>
      </>
          :
      <>
        <ServiceImg src={consulting} />
        <ServiceCardTitle>It consulting</ServiceCardTitle>
        <Button btnText="Әlavә" border color  top hoverColor onClick={() => setIsOpenConsulting(!isOpenConsulting)}/></> 
      } 
        
      </ServiceCard>
    </ServiceWrapper>
  );
};

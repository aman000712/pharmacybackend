import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerSectionModule } from './banner-section/banner-section.module';
import { RevolutionizeModule } from './revolutionize/revolutionize.module';
import { KeyfeaturesModule } from './keyfeatures/keyfeatures.module';
import { TestimonialssectionModule } from './testimonialssection/testimonialssection.module';
import { AboutsectionModule } from './aboutsection/aboutsection.module';
import { TailoredModule } from './tailored/tailored.module';
import { ConnectModule } from './connect/connect.module';
import { PricingplansModule } from './pricingplans/pricingplans.module';
import { DiscoverpointsectionModule } from './discoverpointsection/discoverpointsection.module';
import { HerosectionModule } from './herosection/herosection.module';
import { Herosection } from './herosection/entities/herosection.entity';
import { FileuploadModule } from './fileupload/fileupload.module';
import { Fileupload } from './fileupload/entities/fileupload.entity';
import { BannerSection } from './banner-section/entities/banner-section.entity';
import { Testimonialssection } from './testimonialssection/entities/testimonialssection.entity';
import { Aboutsection } from './aboutsection/entities/aboutsection.entity';
import { Tailored } from './tailored/entities/tailored.entity';
import { Connect } from './connect/entities/connect.entity';
import { Pricingplan } from './pricingplans/entities/pricingplan.entity';
import { Discoverpointsection } from './discoverpointsection/entities/discoverpointsection.entity';
import { FaqsectionModule } from './faqsection/faqsection.module';
import { TransformpointsectionModule } from './transformpointsection/transformpointsection.module';
import { ProgressbarModule } from './progressbar/progressbar.module';
import { WhyussectionModule } from './whyussection/whyussection.module';
import { VisionsectionModule } from './visionsection/visionsection.module';
import { PharmacysectionModule } from './pharmacysection/pharmacysection.module';
import { Faqsection } from './faqsection/entities/faqsection.entity';
import { Transformpointsection } from './transformpointsection/entities/transformpointsection.entity';
import { Progressbar } from './progressbar/entities/progressbar.entity';
import { Whyussection } from './whyussection/entities/whyussection.entity';
import { Visionsection } from './visionsection/entities/visionsection.entity';
import { Pharmacysection } from './pharmacysection/entities/pharmacysection.entity';
import { ConfigModule } from '@nestjs/config';
import { Revolutionize } from './revolutionize/entities/revolutionize.entity';
import { Keyfeature } from './keyfeatures/entities/keyfeature.entity';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [


    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // Ensure this is the correct path
      serveRoot: '/uploads', // This exposes the uploads folder at /uploads/
    }),



    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Amanxtteri0007@',
      database: 'pharmacy',
      entities: [Herosection, Fileupload, BannerSection,Revolutionize,Keyfeature,Testimonialssection, Aboutsection, Tailored, Connect, Pricingplan, Discoverpointsection, Faqsection, Transformpointsection, Progressbar, Whyussection, Visionsection, Pharmacysection],
      synchronize: true
    }),




    BannerSectionModule,


    RevolutionizeModule,


    KeyfeaturesModule,


    TestimonialssectionModule,


    AboutsectionModule,


    TailoredModule,


    ConnectModule,


    PricingplansModule,


    DiscoverpointsectionModule,


    HerosectionModule,


    FileuploadModule,


    FaqsectionModule,


    TransformpointsectionModule,


    ProgressbarModule,


    WhyussectionModule,


    VisionsectionModule,


    PharmacysectionModule,



  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

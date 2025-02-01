import React from 'react'
import { AndroidIcon, AppleIcon, EmailIcon, GithubIcon, InstagramIcon, LinkedinIcon, RedditIcon, TelegramIcon, XIcon, YourWalletIcon } from './icons'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { navigationLinks } from '@/constants/navigation';

export default function Footer() {
    const t = useTranslations();
    return (
        <footer className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-blue-200 bg-blue-100/30 dark:border-gray-600 dark:bg-[#1b1b1c]/30 mx-auto grid w-full max-w-[1200px] px-8 pb-12 pt-8 lg:mb-10 lg:grid-cols-[auto,2fr,1fr] lg:grid-rows-[repeat(3,auto)] lg:gap-y-8 lg:!px-20 lg:!py-12">
            <div className="flex flex-col items-center lg:ml-6 lg:items-start lg:justify-end">
                <h5 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem]">
                    {t("home.footer.stay_connected")}
                </h5>
                <div className="mt-5 flex items-center gap-3 justify-center flex-wrap lg:flex-nowrap">
                    <Link
                        href={"https://x.com/yourwallettr"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="transition flex items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white">
                        <XIcon />
                    </Link>
                    <Link
                        href={"https://github.com/yourwallett"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="transition flex items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={"https://t.me/yourwallettr"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="transition flex items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white">
                        <TelegramIcon />
                    </Link>
                    <Link
                        href={"https://www.instagram.com/yourwallettr"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="transition flex items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white">
                        <InstagramIcon />
                    </Link>
                    <Link
                        href={"mailto:hello@yourwallet.tr"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="transition flex items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white">
                        <EmailIcon />
                    </Link>
                </div>
            </div>
            <ul className="mt-8 flex flex-wrap justify-around gap-6 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:mt-0 lg:grid lg:grid-cols-[repeat(6,1fr)] lg:gap-7 lg:justify-self-start">
                <li className="w-fit max-w-[110px] lg:max-w-none">
                    <strong className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem]">
                        {t("navigation.wallet")}
                    </strong>
                    <nav className="mt-4 grid gap-2">
                        <Link
                            href={"/download"}
                            className="transition items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white flex"
                        >
                            {t("home.footer.mobile_app")}
                        </Link>
                    </nav>
                </li>
                <li className="w-fit max-w-[110px] lg:max-w-none">
                    <strong className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem]">
                        {t("navigation.support")}
                    </strong>
                    <nav className="mt-4 grid gap-2">
                        <Link
                            href={navigationLinks[2].path}
                            className="transition items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white flex"
                        >
                            {t(`navigation.${navigationLinks[2].title_key}`)}
                        </Link>
                    </nav>
                </li>
                <li className="w-fit max-w-[110px] lg:max-w-none">
                    <strong className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem]">
                        {t("navigation.about")}
                    </strong>
                    <nav className="mt-4 grid gap-2">
                        <Link
                            href={navigationLinks[0].path}
                            className="transition items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white flex"
                        >
                            {t(`navigation.${navigationLinks[0].title_key}`)}
                        </Link>
                        <Link
                            href={navigationLinks[1].path}
                            className="transition items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white flex"
                        >
                            {t(`navigation.${navigationLinks[1].title_key}`)}
                        </Link>
                        <Link
                            href={navigationLinks[3].path}
                            className="transition items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white flex"
                        >
                            {t(`navigation.${navigationLinks[3].title_key}`)}
                        </Link>
                        <Link
                            href={"/privacy-policy"}
                            className="transition items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white flex"
                        >
                            {t(`navigation.privacy`)}
                        </Link>
                        <Link
                            href={"/terms-of-service"}
                            className="transition items-center gap-3 font-inter text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] text-black hover:underline dark:text-white flex"
                        >
                            {t(`navigation.terms`)}
                        </Link>
                    </nav>
                </li>
            </ul>
            <div className="mt-8 text-center lg:col-start-2 lg:row-start-2 lg:row-end-4 lg:mt-0 lg:block lg:text-left">
                <strong className="transition text-black font-inter dark:text-white text-[.9375rem] leading-[1.125rem] md:text-[.75rem] md:leading-[1.125rem]">
                    {t("home.footer.download.title")}
                </strong>
                <p className="transition text-black font-inter dark:text-white text-[.9375rem] leading-[1.125rem] md:text-[.75rem] md:leading-[1.125rem] mb-4 mt-1">
                    {t("home.footer.download.description")}
                </p>
                <div className="flex flex-wrap gap-3 md:max-w-none ">
                    <Link
                        href={"/download"}
                        className="px-5 py-2.5 h-9 transition relative z-10 overflow-hidden flex items-center justify-center gap-3 rounded-full text-center font-medium leading-[.9375rem] bg-transparent border dark:text-[#477DE9] dark:border-[#477DE9] text-[#8B1DB8] border-[#8B1DB8] | dark:hover:bg-[#477DE9] dark:hover:text-white hover:text-white hover:bg-[#8B1DB8] w-full !text-[13px] lg:w-fit"
                    >
                        {t("home.footer.download.ios")}
                        <AppleIcon />
                    </Link>
                    <Link
                        href={"/download"}
                        className="px-5 py-2.5 h-9 transition relative z-10 overflow-hidden flex items-center justify-center gap-3 rounded-full text-center font-medium leading-[.9375rem] bg-transparent border dark:text-[#477DE9] dark:border-[#477DE9] text-[#8B1DB8] border-[#8B1DB8] | dark:hover:bg-[#477DE9] dark:hover:text-white hover:text-white hover:bg-[#8B1DB8] w-full !text-[13px] lg:w-fit"
                    >
                        {t("home.footer.download.android")}
                        <AndroidIcon />
                    </Link>
                </div>
            </div>
            <div className="mx-auto mt-8 self-center lg:col-start-1 lg:row-start-1 lg:row-end-4 lg:mt-0 text-[#7421F7] dark:text-[#477DE9]">
                <YourWalletIcon className="md:mr-24 h-auto w-[180px]" />
            </div>
        </footer>
    )
}

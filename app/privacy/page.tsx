import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import {
  LegalShell,
  LegalP,
  LegalH3,
  LegalH4,
  LegalUL,
  LegalLI,
  LegalStrong,
  LegalLink,
  LegalDef,
  LegalCategory,
  LegalCallout,
  type LegalSection,
} from "@/components/legal/legal-shell"
import { buildMetadata, SITE_URL, BUSINESS } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Max Market Pros collects, uses, and protects your information when you use our website and services — plus your California privacy rights under CCPA and CPRA.",
  path: "/privacy",
})

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: `${SITE_URL}/privacy`,
      },
    ],
  }
  const policySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy | Max Market Pros",
    url: `${SITE_URL}/privacy`,
    dateModified: "2024-05-13",
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
    },
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(policySchema) }}
      />
    </>
  )
}

const sections: LegalSection[] = [
  {
    id: "interpretation-and-definitions",
    title: "Interpretation and Definitions",
    body: (
      <>
        <LegalH3>Interpretation</LegalH3>
        <LegalP>
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions. The following definitions shall have the same meaning regardless of
          whether they appear in singular or in plural.
        </LegalP>

        <LegalH3>Definitions</LegalH3>
        <LegalP>For the purposes of this Privacy Policy:</LegalP>

        <div className="mt-5">
          <LegalDef term="Account">
            means a unique account created for You to access our Service or parts of our Service.
          </LegalDef>
          <LegalDef term="Affiliate">
            means an entity that controls, is controlled by or is under common control with a
            party, where &ldquo;control&rdquo; means ownership of 50% or more of the shares, equity
            interest or other securities entitled to vote for election of directors or other
            managing authority.
          </LegalDef>
          <LegalDef term="Application">
            refers to Max Market Pros, the software program provided by the Company.
          </LegalDef>
          <LegalDef term="Business">
            for the purpose of CCPA/CPRA, refers to the Company as the legal entity that collects
            Consumers&rsquo; personal information and determines the purposes and means of the
            processing of Consumers&rsquo; personal information, or on behalf of which such
            information is collected and that alone, or jointly with others, determines the purposes
            and means of the processing of consumers&rsquo; personal information, that does business
            in the State of California.
          </LegalDef>
          <LegalDef term="CCPA and/or CPRA">
            refers to the California Consumer Privacy Act (the &ldquo;CCPA&rdquo;) as amended by the
            California Privacy Rights Act of 2020 (the &ldquo;CPRA&rdquo;).
          </LegalDef>
          <LegalDef term={'Company ("We", "Us", or "Our")'}>
            refers to Max Market Pros, 2600 Michelson Dr 16th FL, Irvine, CA 92612.
          </LegalDef>
          <LegalDef term="Consumer">
            for the purpose of the CCPA/CPRA, means a natural person who is a California resident. A
            resident, as defined in the law, includes (1) every individual who is in the USA for
            other than a temporary or transitory purpose, and (2) every individual who is domiciled
            in the USA who is outside the USA for a temporary or transitory purpose.
          </LegalDef>
          <LegalDef term="Cookies">
            are small files that are placed on Your computer, mobile device or any other device by a
            website, containing the details of Your browsing history on that website among its many
            uses.
          </LegalDef>
          <LegalDef term="Country">refers to: California, United States</LegalDef>
          <LegalDef term="Device">
            means any device that can access the Service such as a computer, a cellphone or a
            digital tablet.
          </LegalDef>
          <LegalDef term="Do Not Track (DNT)">
            is a concept that has been promoted by US regulatory authorities, in particular the U.S.
            Federal Trade Commission (FTC), for the Internet industry to develop and implement a
            mechanism for allowing internet users to control the tracking of their online activities
            across websites.
          </LegalDef>
          <LegalDef term="Personal Data">
            is any information that relates to an identified or identifiable individual. For the
            purposes of the CCPA/CPRA, Personal Data means any information that identifies, relates
            to, describes or is capable of being associated with, or could reasonably be linked,
            directly or indirectly, with You.
          </LegalDef>
          <LegalDef term="Service">refers to the Application or the Website or both.</LegalDef>
          <LegalDef term="Service Provider">
            means any natural or legal person who processes the data on behalf of the Company. It
            refers to third-party companies or individuals employed by the Company to facilitate the
            Service, to provide the Service on behalf of the Company, to perform services related to
            the Service or to assist the Company in analyzing how the Service is used.
          </LegalDef>
          <LegalDef term="Third-party Social Media Service">
            refers to any website or any social network website through which a User can log in or
            create an account to use the Service.
          </LegalDef>
          <LegalDef term="Usage Data">
            refers to data collected automatically, either generated by the use of the Service or
            from the Service infrastructure itself (for example, the duration of a page visit).
          </LegalDef>
          <LegalDef term="Website">
            refers to Max Market Pros, accessible from{" "}
            <LegalLink href="https://www.maxmarketpros.com/" external>
              https://www.maxmarketpros.com/
            </LegalLink>
          </LegalDef>
          <LegalDef term="You">
            means the individual accessing or using the Service, or the company, or other legal
            entity on behalf of which such individual is accessing or using the Service, as
            applicable.
          </LegalDef>
        </div>
      </>
    ),
  },
  {
    id: "collecting-and-using-your-personal-data",
    title: "Collecting and Using Your Personal Data",
    body: (
      <>
        <LegalH3>Types of Data Collected</LegalH3>

        <LegalH4>Personal Data</LegalH4>
        <LegalP>
          While using Our Service, We may ask You to provide Us with certain personally identifiable
          information that can be used to contact or identify You. Personally identifiable
          information may include, but is not limited to:
        </LegalP>
        <LegalUL>
          <LegalLI>Email address</LegalLI>
          <LegalLI>First name and last name</LegalLI>
          <LegalLI>Phone number</LegalLI>
          <LegalLI>Address, State, Province, ZIP/Postal code, City</LegalLI>
          <LegalLI>
            Bank account information in order to pay for products and/or services within the Service
          </LegalLI>
        </LegalUL>

        <LegalP>
          When You pay for a product and/or a service via bank transfer, We may ask You to provide
          information to facilitate this transaction and to verify Your identity. Such information
          may include, without limitation:
        </LegalP>
        <LegalUL>
          <LegalLI>Date of birth</LegalLI>
          <LegalLI>Passport or National ID card</LegalLI>
          <LegalLI>Bank card statement</LegalLI>
          <LegalLI>Other information linking You to an address</LegalLI>
        </LegalUL>

        <LegalH4>Usage Data</LegalH4>
        <LegalP>Usage Data is collected automatically when using the Service.</LegalP>
        <LegalP>
          Usage Data may include information such as Your Device&rsquo;s Internet Protocol address
          (e.g. IP address), browser type, browser version, the pages of our Service that You visit,
          the time and date of Your visit, the time spent on those pages, unique device identifiers
          and other diagnostic data.
        </LegalP>
        <LegalP>
          When You access the Service by or through a mobile device, We may collect certain
          information automatically, including, but not limited to, the type of mobile device You
          use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile
          operating system, the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
        </LegalP>
        <LegalP>
          We may also collect information that Your browser sends whenever You visit our Service or
          when You access the Service by or through a mobile device.
        </LegalP>

        <LegalH4>Information from Third-Party Social Media Services</LegalH4>
        <LegalP>
          The Company allows You to create an account and log in to use the Service through the
          following Third-party Social Media Services:
        </LegalP>
        <LegalUL>
          <LegalLI>Google</LegalLI>
          <LegalLI>Facebook</LegalLI>
          <LegalLI>Instagram</LegalLI>
          <LegalLI>Twitter</LegalLI>
          <LegalLI>LinkedIn</LegalLI>
        </LegalUL>
        <LegalP>
          If You decide to register through or otherwise grant us access to a Third-Party Social
          Media Service, We may collect Personal data that is already associated with Your
          Third-Party Social Media Service&rsquo;s account, such as Your name, Your email address,
          Your activities or Your contact list associated with that account.
        </LegalP>
        <LegalP>
          You may also have the option of sharing additional information with the Company through
          Your Third-Party Social Media Service&rsquo;s account. If You choose to provide such
          information and Personal Data, during registration or otherwise, You are giving the
          Company permission to use, share, and store it in a manner consistent with this Privacy
          Policy.
        </LegalP>

        <LegalH4>Tracking Technologies and Cookies</LegalH4>
        <LegalP>
          We use Cookies and similar tracking technologies to track the activity on Our Service and
          store certain information. Tracking technologies used are beacons, tags, and scripts to
          collect and track information and to improve and analyze Our Service. The technologies We
          use may include:
        </LegalP>
        <LegalUL>
          <LegalLI>
            <LegalStrong>Cookies or Browser Cookies.</LegalStrong> A cookie is a small file placed
            on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when
            a Cookie is being sent. However, if You do not accept Cookies, You may not be able to
            use some parts of our Service. Unless you have adjusted Your browser setting so that it
            will refuse Cookies, our Service may use Cookies.
          </LegalLI>
          <LegalLI>
            <LegalStrong>Web Beacons.</LegalStrong> Certain sections of our Service and our emails
            may contain small electronic files known as web beacons (also referred to as clear gifs,
            pixel tags, and single-pixel gifs) that permit the Company, for example, to count users
            who have visited those pages or opened an email and for other related website statistics
            (for example, recording the popularity of a certain section and verifying system and
            server integrity).
          </LegalLI>
        </LegalUL>
        <LegalP>
          Cookies can be &ldquo;Persistent&rdquo; or &ldquo;Session&rdquo; Cookies. Persistent
          Cookies remain on Your personal computer or mobile device when You go offline, while
          Session Cookies are deleted as soon as You close Your web browser.
        </LegalP>

        <LegalH4>Email and Text Message Communications</LegalH4>
        <LegalUL>
          <LegalLI>
            If you wish to unsubscribe from our email campaigns, please click on the Unsubscribe
            link at the bottom of any marketing email sent from us.
          </LegalLI>
          <LegalLI>
            If you wish to stop receiving text messages from us, reply STOP, QUIT, CANCEL, OPT-OUT,
            or UNSUBSCRIBE to any text message sent from us. For more information, see our Mobile
            Messaging Terms and Conditions available at{" "}
            <LegalLink
              href="https://www.termsfeed.com/live/3bac7467-a95f-476c-960e-36f7b83e3ff9"
              external
            >
              termsfeed.com/live/3bac7467-a95f-476c-960e-36f7b83e3ff9
            </LegalLink>
            .
          </LegalLI>
        </LegalUL>

        <LegalP>We use both Session and Persistent Cookies for the purposes set out below:</LegalP>

        <LegalH4>Necessary / Essential Cookies</LegalH4>
        <LegalP>
          <LegalStrong>Type:</LegalStrong> Session Cookies &middot;{" "}
          <LegalStrong>Administered by:</LegalStrong> Us
        </LegalP>
        <LegalP>
          <LegalStrong>Purpose:</LegalStrong> These Cookies are essential to provide You with
          services available through the Website and to enable You to use some of its features. They
          help to authenticate users and prevent fraudulent use of user accounts. Without these
          Cookies, the services that You have asked for cannot be provided, and We only use these
          Cookies to provide You with those services.
        </LegalP>

        <LegalH4>Cookies Policy / Notice Acceptance Cookies</LegalH4>
        <LegalP>
          <LegalStrong>Type:</LegalStrong> Persistent Cookies &middot;{" "}
          <LegalStrong>Administered by:</LegalStrong> Us
        </LegalP>
        <LegalP>
          <LegalStrong>Purpose:</LegalStrong> These Cookies identify if users have accepted the use
          of cookies on the Website.
        </LegalP>

        <LegalH4>Functionality Cookies</LegalH4>
        <LegalP>
          <LegalStrong>Type:</LegalStrong> Persistent Cookies &middot;{" "}
          <LegalStrong>Administered by:</LegalStrong> Us
        </LegalP>
        <LegalP>
          <LegalStrong>Purpose:</LegalStrong> These Cookies allow us to remember choices You make
          when You use the Website, such as remembering your login details or language preference.
          The purpose of these Cookies is to provide You with a more personal experience and to
          avoid You having to re-enter your preferences every time You use the Website.
        </LegalP>

        <LegalH4>Tracking and Performance Cookies</LegalH4>
        <LegalP>
          <LegalStrong>Type:</LegalStrong> Persistent Cookies &middot;{" "}
          <LegalStrong>Administered by:</LegalStrong> Third-Parties
        </LegalP>
        <LegalP>
          <LegalStrong>Purpose:</LegalStrong> These Cookies are used to track information about
          traffic to the Website and how users use the Website. The information gathered via these
          Cookies may directly or indirectly identify you as an individual visitor. This is because
          the information collected is typically linked to a pseudonymous identifier associated with
          the device you use to access the Website. We may also use these Cookies to test new pages,
          features or new functionality of the Website to see how our users react to them.
        </LegalP>
      </>
    ),
  },
  {
    id: "use-of-your-personal-data",
    title: "Use of Your Personal Data",
    body: (
      <>
        <LegalP>The Company may use Personal Data for the following purposes:</LegalP>
        <LegalUL>
          <LegalLI>
            <LegalStrong>To provide and maintain our Service</LegalStrong>, including to monitor the
            usage of our Service.
          </LegalLI>
          <LegalLI>
            <LegalStrong>To manage Your Account:</LegalStrong> to manage Your registration as a user
            of the Service. The Personal Data You provide can give You access to different
            functionalities of the Service that are available to You as a registered user.
          </LegalLI>
          <LegalLI>
            <LegalStrong>For the performance of a contract:</LegalStrong> the development,
            compliance and undertaking of the purchase contract for the products, items or services
            You have purchased or of any other contract with Us through the Service.
          </LegalLI>
          <LegalLI>
            <LegalStrong>To contact You:</LegalStrong> To contact You by email, telephone calls,
            SMS, or other equivalent forms of electronic communication, such as a mobile
            application&rsquo;s push notifications regarding updates or informative communications
            related to the functionalities, products or contracted services, including the security
            updates, when necessary or reasonable for their implementation.
          </LegalLI>
          <LegalLI>
            <LegalStrong>To provide You with news, special offers and general information</LegalStrong>{" "}
            about other goods, services and events which we offer that are similar to those that you
            have already purchased or enquired about unless You have opted not to receive such
            information.
          </LegalLI>
          <LegalLI>
            <LegalStrong>To manage Your requests:</LegalStrong> To attend and manage Your requests
            to Us.
          </LegalLI>
          <LegalLI>
            <LegalStrong>For business transfers:</LegalStrong> We may use Your information to
            evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution,
            or other sale or transfer of some or all of Our assets, whether as a going concern or as
            part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by
            Us about our Service users is among the assets transferred.
          </LegalLI>
          <LegalLI>
            <LegalStrong>For other purposes:</LegalStrong> We may use Your information for other
            purposes, such as data analysis, identifying usage trends, determining the effectiveness
            of our promotional campaigns and to evaluate and improve our Service, products,
            services, marketing and your experience.
          </LegalLI>
        </LegalUL>

        <LegalP>We may share Your personal information in the following situations:</LegalP>
        <LegalUL>
          <LegalLI>
            <LegalStrong>With Service Providers:</LegalStrong> We may share Your personal
            information with Service Providers to monitor and analyze the use of our Service, for
            payment processing, to contact You.
          </LegalLI>
          <LegalLI>
            <LegalStrong>For business transfers:</LegalStrong> We may share or transfer Your
            personal information in connection with, or during negotiations of, any merger, sale of
            Company assets, financing, or acquisition of all or a portion of Our business to another
            company.
          </LegalLI>
          <LegalLI>
            <LegalStrong>With Affiliates:</LegalStrong> We may share Your information with Our
            affiliates, in which case we will require those affiliates to honor this Privacy Policy.
            Affiliates include Our parent company and any other subsidiaries, joint venture partners
            or other companies that We control or that are under common control with Us.
          </LegalLI>
          <LegalLI>
            <LegalStrong>With business partners:</LegalStrong> We may share Your information with
            Our business partners to offer You certain products, services or promotions.
          </LegalLI>
          <LegalLI>
            <LegalStrong>With other users:</LegalStrong> when You share personal information or
            otherwise interact in the public areas with other users, such information may be viewed
            by all users and may be publicly distributed outside. If You interact with other users
            or register through a Third-Party Social Media Service, Your contacts on the Third-Party
            Social Media Service may see Your name, profile, pictures and description of Your
            activity. Similarly, other users will be able to view descriptions of Your activity,
            communicate with You and view Your profile.
          </LegalLI>
          <LegalLI>
            <LegalStrong>With Your consent:</LegalStrong> We may disclose Your personal information
            for any other purpose with Your consent.
          </LegalLI>
        </LegalUL>
      </>
    ),
  },
  {
    id: "retention-of-your-personal-data",
    title: "Retention of Your Personal Data",
    body: (
      <>
        <LegalP>
          The Company will retain Your Personal Data only for as long as is necessary for the
          purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the
          extent necessary to comply with our legal obligations (for example, if we are required to
          retain your data to comply with applicable laws), resolve disputes, and enforce our legal
          agreements and policies.
        </LegalP>
        <LegalP>
          The Company will also retain Usage Data for internal analysis purposes. Usage Data is
          generally retained for a shorter period of time, except when this data is used to
          strengthen the security or to improve the functionality of Our Service, or We are legally
          obligated to retain this data for longer time periods.
        </LegalP>
      </>
    ),
  },
  {
    id: "transfer-of-your-personal-data",
    title: "Transfer of Your Personal Data",
    body: (
      <>
        <LegalP>
          Your information, including Personal Data, is processed at the Company&rsquo;s operating
          offices and in any other places where the parties involved in the processing are located.
          It means that this information may be transferred to &mdash; and maintained on &mdash;
          computers located outside of Your state, province, country or other governmental
          jurisdiction where the data protection laws may differ than those from Your jurisdiction.
        </LegalP>
        <LegalP>
          Your consent to this Privacy Policy followed by Your submission of such information
          represents Your agreement to that transfer.
        </LegalP>
        <LegalP>
          The Company will take all steps reasonably necessary to ensure that Your data is treated
          securely and in accordance with this Privacy Policy and no transfer of Your Personal Data
          will take place to an organization or a country unless there are adequate controls in
          place including the security of Your data and other personal information.
        </LegalP>
      </>
    ),
  },
  {
    id: "delete-your-personal-data",
    title: "Delete Your Personal Data",
    body: (
      <>
        <LegalP>
          You have the right to delete or request that We assist in deleting the Personal Data that
          We have collected about You.
        </LegalP>
        <LegalP>
          Our Service may give You the ability to delete certain information about You from within
          the Service.
        </LegalP>
        <LegalP>
          You may update, amend, or delete Your information at any time by signing in to Your
          Account, if you have one, and visiting the account settings section that allows you to
          manage Your personal information. You may also contact Us to request access to, correct,
          or delete any personal information that You have provided to Us.
        </LegalP>
        <LegalP>
          Please note, however, that We may need to retain certain information when we have a legal
          obligation or lawful basis to do so.
        </LegalP>
      </>
    ),
  },
  {
    id: "disclosure-of-your-personal-data",
    title: "Disclosure of Your Personal Data",
    body: (
      <>
        <LegalH3>Business Transactions</LegalH3>
        <LegalP>
          If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may
          be transferred. We will provide notice before Your Personal Data is transferred and
          becomes subject to a different Privacy Policy.
        </LegalP>

        <LegalH3>Law Enforcement</LegalH3>
        <LegalP>
          Under certain circumstances, the Company may be required to disclose Your Personal Data if
          required to do so by law or in response to valid requests by public authorities (e.g. a
          court or a government agency).
        </LegalP>

        <LegalH3>Other Legal Requirements</LegalH3>
        <LegalP>
          The Company may disclose Your Personal Data in the good faith belief that such action is
          necessary to:
        </LegalP>
        <LegalUL>
          <LegalLI>Comply with a legal obligation</LegalLI>
          <LegalLI>Protect and defend the rights or property of the Company</LegalLI>
          <LegalLI>
            Prevent or investigate possible wrongdoing in connection with the Service
          </LegalLI>
          <LegalLI>Protect the personal safety of Users of the Service or the public</LegalLI>
          <LegalLI>Protect against legal liability</LegalLI>
        </LegalUL>
      </>
    ),
  },
  {
    id: "security-of-your-personal-data",
    title: "Security of Your Personal Data",
    body: (
      <>
        <LegalP>
          The security of Your Personal Data is important to Us, but remember that no method of
          transmission over the Internet, or method of electronic storage is 100% secure. While We
          strive to use commercially acceptable means to protect Your Personal Data, We cannot
          guarantee its absolute security.
        </LegalP>
      </>
    ),
  },
  {
    id: "detailed-information-on-processing",
    title: "Detailed Information on the Processing of Your Personal Data",
    body: (
      <>
        <LegalP>
          The Service Providers We use may have access to Your Personal Data. These third-party
          vendors collect, store, use, process and transfer information about Your activity on Our
          Service in accordance with their Privacy Policies.
        </LegalP>

        <LegalH3>Analytics</LegalH3>
        <LegalP>
          We may use third-party Service providers to monitor and analyze the use of our Service.
        </LegalP>

        <LegalH4>Google Analytics</LegalH4>
        <LegalP>
          Google Analytics is a web analytics service offered by Google that tracks and reports
          website traffic. Google uses the data collected to track and monitor the use of our
          Service. This data is shared with other Google services. Google may use the collected data
          to contextualize and personalize the ads of its own advertising network.
        </LegalP>
        <LegalP>
          You can opt-out of having made your activity on the Service available to Google Analytics
          by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google
          Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google
          Analytics about visits activity.
        </LegalP>
        <LegalP>
          You may opt-out of certain Google Analytics features through your mobile device settings,
          such as your device advertising settings or by following the instructions provided by
          Google in their Privacy Policy:{" "}
          <LegalLink href="https://policies.google.com/privacy" external>
            policies.google.com/privacy
          </LegalLink>
          .
        </LegalP>

        <LegalH3>Payments</LegalH3>
        <LegalP>
          We may provide paid products and/or services within the Service. In that case, we may use
          third-party services for payment processing (e.g. payment processors).
        </LegalP>
        <LegalP>
          We will not store or collect Your payment card details. That information is provided
          directly to Our third-party payment processors whose use of Your personal information is
          governed by their Privacy Policy. These payment processors adhere to the standards set by
          PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of
          brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help
          ensure the secure handling of payment information.
        </LegalP>

        <LegalH4>Stripe</LegalH4>
        <LegalP>
          Their Privacy Policy can be viewed at{" "}
          <LegalLink href="https://stripe.com/us/privacy" external>
            stripe.com/us/privacy
          </LegalLink>
          .
        </LegalP>

        <LegalH4>PayPal</LegalH4>
        <LegalP>
          Their Privacy Policy can be viewed at{" "}
          <LegalLink href="https://www.paypal.com/webapps/mpp/ua/privacy-full" external>
            paypal.com/webapps/mpp/ua/privacy-full
          </LegalLink>
          .
        </LegalP>

        <LegalH4>Authorize.net</LegalH4>
        <LegalP>
          Their Privacy Policy can be viewed at{" "}
          <LegalLink href="https://www.authorize.net/company/privacy/" external>
            authorize.net/company/privacy
          </LegalLink>
          .
        </LegalP>

        <LegalP>
          When You use Our Service to pay a product and/or service via bank transfer, We may ask You
          to provide information to facilitate this transaction and to verify Your identity.
        </LegalP>
      </>
    ),
  },
  {
    id: "ccpa-cpra-privacy-notice",
    title: "CCPA/CPRA Privacy Notice (California Privacy Rights)",
    body: (
      <>
        <LegalP>
          This privacy notice section for California residents supplements the information contained
          in Our Privacy Policy and it applies solely to all visitors, users, and others who reside
          in the State of California.
        </LegalP>

        <LegalH3>Categories of Personal Information Collected</LegalH3>
        <LegalP>
          We collect information that identifies, relates to, describes, references, is capable of
          being associated with, or could reasonably be linked, directly or indirectly, with a
          particular Consumer or Device. The following is a list of categories of personal
          information which we may collect or may have been collected from California residents
          within the last twelve (12) months.
        </LegalP>
        <LegalP>
          Please note that the categories and examples provided in the list below are those defined
          in the CCPA/CPRA. This does not mean that all examples of that category of personal
          information were in fact collected by Us, but reflects our good faith belief to the best
          of Our knowledge that some of that information from the applicable category may be and
          may have been collected.
        </LegalP>

        <div className="mt-5">
          <LegalCategory
            letter="A"
            name="Identifiers"
            collected
            examples="A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, driver's license number, passport number, or other similar identifiers."
          />
          <LegalCategory
            letter="B"
            name="California Customer Records statute (Cal. Civ. Code § 1798.80(e))"
            collected
            examples="A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories."
          />
          <LegalCategory
            letter="C"
            name="Protected classification characteristics"
            collected={false}
            examples="Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information)."
          />
          <LegalCategory
            letter="D"
            name="Commercial information"
            collected
            examples="Records and history of products or services purchased or considered."
          />
          <LegalCategory
            letter="E"
            name="Biometric information"
            collected={false}
            examples="Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data."
          />
          <LegalCategory
            letter="F"
            name="Internet or other similar network activity"
            collected
            examples="Interaction with our Service or advertisement."
          />
          <LegalCategory
            letter="G"
            name="Geolocation data"
            collected={false}
            examples="Approximate physical location."
          />
          <LegalCategory
            letter="H"
            name="Sensory data"
            collected={false}
            examples="Audio, electronic, visual, thermal, olfactory, or similar information."
          />
          <LegalCategory
            letter="I"
            name="Professional or employment-related information"
            collected={false}
            examples="Current or past job history or performance evaluations."
          />
          <LegalCategory
            letter="J"
            name="Non-public education information (FERPA)"
            collected={false}
            examples="Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records."
          />
          <LegalCategory
            letter="K"
            name="Inferences drawn from other personal information"
            collected={false}
            examples="Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes."
          />
          <LegalCategory
            letter="L"
            name="Sensitive personal information"
            collected
            examples="Account login and password information, geolocation data."
          />
        </div>

        <LegalP>Under CCPA/CPRA, personal information does not include:</LegalP>
        <LegalUL>
          <LegalLI>Publicly available information from government records</LegalLI>
          <LegalLI>Deidentified or aggregated consumer information</LegalLI>
          <LegalLI>
            Information excluded from the CCPA/CPRA&rsquo;s scope, such as health or medical
            information covered by HIPAA, the California Confidentiality of Medical Information Act
            (CMIA), clinical trial data, and personal information covered by certain sector-specific
            privacy laws (FCRA, GLBA, FIPA, and the Driver&rsquo;s Privacy Protection Act of 1994).
          </LegalLI>
        </LegalUL>

        <LegalH3>Sources of Personal Information</LegalH3>
        <LegalP>
          We obtain the categories of personal information listed above from the following
          categories of sources:
        </LegalP>
        <LegalUL>
          <LegalLI>
            <LegalStrong>Directly from You.</LegalStrong> For example, from the forms You complete
            on our Service, preferences You express or provide through our Service, or from Your
            purchases on our Service.
          </LegalLI>
          <LegalLI>
            <LegalStrong>Indirectly from You.</LegalStrong> For example, from observing Your
            activity on our Service.
          </LegalLI>
          <LegalLI>
            <LegalStrong>Automatically from You.</LegalStrong> For example, through cookies We or
            our Service Providers set on Your Device as You navigate through our Service.
          </LegalLI>
          <LegalLI>
            <LegalStrong>From Service Providers.</LegalStrong> For example, third-party vendors to
            monitor and analyze the use of our Service, third-party vendors for payment processing,
            or other third-party vendors that We use to provide the Service to You.
          </LegalLI>
        </LegalUL>

        <LegalH3>Use of Personal Information</LegalH3>
        <LegalP>
          We may use or disclose personal information We collect for &ldquo;business purposes&rdquo;
          or &ldquo;commercial purposes&rdquo; (as defined under the CCPA/CPRA), which may include
          the following examples:
        </LegalP>
        <LegalUL>
          <LegalLI>To operate our Service and provide You with Our Service.</LegalLI>
          <LegalLI>
            To provide You with support and to respond to Your inquiries, including to investigate
            and address Your concerns and monitor and improve our Service.
          </LegalLI>
          <LegalLI>
            To fulfill or meet the reason You provided the information. For example, if You share
            Your contact information to ask a question about our Service, We will use that personal
            information to respond to Your inquiry.
          </LegalLI>
          <LegalLI>
            To respond to law enforcement requests and as required by applicable law, court order,
            or governmental regulations.
          </LegalLI>
          <LegalLI>For internal administrative and auditing purposes.</LegalLI>
          <LegalLI>
            To detect security incidents and protect against malicious, deceptive, fraudulent or
            illegal activity, including, when necessary, to prosecute those responsible.
          </LegalLI>
          <LegalLI>Other one-time uses.</LegalLI>
        </LegalUL>

        <LegalH3>Disclosure of Personal Information</LegalH3>
        <LegalP>
          We may use or disclose and may have used or disclosed in the last twelve (12) months the
          following categories of personal information for business or commercial purposes:
        </LegalP>
        <LegalUL>
          <LegalLI>Category A: Identifiers</LegalLI>
          <LegalLI>
            Category B: Personal information categories listed in the California Customer Records
            statute (Cal. Civ. Code &sect; 1798.80(e))
          </LegalLI>
          <LegalLI>Category D: Commercial information</LegalLI>
          <LegalLI>Category F: Internet or other similar network activity</LegalLI>
        </LegalUL>
        <LegalUL>
          <LegalLI>
            We may use third-party service providers to assist us with providing and marketing our
            products and services to you and we may share your information with such third parties
            for these limited purposes.
          </LegalLI>
          <LegalLI>
            We use HighLevel Inc. for our email marketing and text message communications. For more
            information, see HighLevel Inc.&rsquo;s Data Processing Agreement at{" "}
            <LegalLink href="https://www.gohighlevel.com/data-processing-agreement" external>
              gohighlevel.com/data-processing-agreement
            </LegalLink>
            .
          </LegalLI>
          <LegalLI>
            We use Google Analytics to help us understand how visitors interact with our website.
            Google Analytics uses and processes your information in accordance with its privacy
            policy at{" "}
            <LegalLink href="https://www.google.com/policies/privacy/" external>
              google.com/policies/privacy
            </LegalLink>
            .
          </LegalLI>
          <LegalLI>
            We may also share your personal information if necessary to comply with applicable laws
            and regulations, to respond to a subpoena, search warrant or other lawful request for
            information we receive, or to otherwise protect our rights.
          </LegalLI>
        </LegalUL>

        <LegalH3>Sale of Personal Information</LegalH3>
        <LegalP>
          As defined in the CCPA/CPRA, &ldquo;sell&rdquo; and &ldquo;sale&rdquo; mean selling,
          renting, releasing, disclosing, disseminating, making available, transferring, or
          otherwise communicating orally, in writing, or by electronic or other means, a
          Consumer&rsquo;s personal information by the Business to a third party for valuable
          consideration. This means that We may have received some kind of benefit in return for
          sharing personal information, but not necessarily a monetary benefit.
        </LegalP>
        <LegalP>
          We do not sell personal information as the term sell is commonly understood. We do allow
          Service Providers to use Your personal information for the business purposes described in
          Our Privacy Policy, for activities such as advertising, marketing, and analytics, and
          these may be deemed a sale under CCPA/CPRA.
        </LegalP>

        <LegalH3>Sale of Personal Information of Minors Under 16 Years of Age</LegalH3>
        <LegalP>
          We do not knowingly collect personal information from minors under the age of 16 through
          our Service, although certain third party websites that we link to may do so. These
          third-party websites have their own terms of use and privacy policies and We encourage
          parents and legal guardians to monitor their children&rsquo;s Internet usage and instruct
          their children to never provide information on other websites without their permission.
        </LegalP>
        <LegalP>
          We do not sell the personal information of Consumers We actually know are less than 16
          years of age, unless We receive affirmative authorization (the &ldquo;right to
          opt-in&rdquo;) from either the Consumer who is between 13 and 16 years of age, or the
          parent or guardian of a Consumer less than 13 years of age. Consumers who opt-in to the
          sale of personal information may opt-out of future sales at any time.
        </LegalP>
      </>
    ),
  },
  {
    id: "your-rights-under-ccpa-cpra",
    title: "Your Rights under the CCPA/CPRA",
    body: (
      <>
        <LegalP>
          The CCPA/CPRA provides California residents with specific rights regarding their personal
          information. If You are a resident of California, You have the following rights:
        </LegalP>
        <LegalUL>
          <LegalLI>
            <LegalStrong>The right to notice.</LegalStrong> You have the right to be notified which
            categories of Personal Data are being collected and the purposes for which the Personal
            Data is being used.
          </LegalLI>
          <LegalLI>
            <LegalStrong>The right to know/access.</LegalStrong> Under CCPA/CPRA, You have the right
            to request that We disclose information to You about Our collection, use, sale,
            disclosure for business purposes and share of personal information.
          </LegalLI>
          <LegalLI>
            <LegalStrong>The right to say no to the sale or sharing of Personal Data (opt-out).</LegalStrong>{" "}
            You have the right to direct Us to not sell Your personal information.
          </LegalLI>
          <LegalLI>
            <LegalStrong>The right to correct Personal Data.</LegalStrong> You have the right to
            correct or rectify any inaccurate personal information about You that We collected.
          </LegalLI>
          <LegalLI>
            <LegalStrong>The right to limit use and disclosure of sensitive Personal Data.</LegalStrong>{" "}
            You have the right to request to limit the use or disclosure of certain sensitive
            personal information We collected about You, unless an exception applies.
          </LegalLI>
          <LegalLI>
            <LegalStrong>The right to delete Personal Data.</LegalStrong> You have the right to
            request the deletion of Your Personal Data under certain circumstances, subject to
            certain exceptions.
          </LegalLI>
          <LegalLI>
            <LegalStrong>The right not to be discriminated against.</LegalStrong> You have the right
            not to be discriminated against for exercising any of Your consumer&rsquo;s rights.
          </LegalLI>
        </LegalUL>
      </>
    ),
  },
  {
    id: "exercising-your-rights",
    title: "Exercising Your CCPA/CPRA Data Protection Rights",
    body: (
      <>
        <LegalP>
          In order to exercise any of Your rights under the CCPA/CPRA, and if You are a California
          resident, You can contact Us:
        </LegalP>
        <LegalCallout title="California Privacy Requests">
          <p>
            <LegalStrong>By email:</LegalStrong>{" "}
            <LegalLink href="mailto:joseph@maxmarketpros.com">joseph@maxmarketpros.com</LegalLink>
          </p>
          <p className="mt-1.5">
            <LegalStrong>By phone:</LegalStrong>{" "}
            <LegalLink href="tel:+19496030389">949.603.0389</LegalLink>
          </p>
        </LegalCallout>
        <LegalP>
          Only You, or a person registered with the California Secretary of State that You
          authorize to act on Your behalf, may make a verifiable request related to Your personal
          information.
        </LegalP>
        <LegalP>Your request to Us must:</LegalP>
        <LegalUL>
          <LegalLI>
            Provide sufficient information that allows Us to reasonably verify You are the person
            about whom We collected personal information or an authorized representative
          </LegalLI>
          <LegalLI>
            Describe Your request with sufficient detail that allows Us to properly understand,
            evaluate, and respond to it
          </LegalLI>
        </LegalUL>
        <LegalP>
          We will disclose and deliver the required information free of charge within 45 days of
          receiving Your verifiable request. The time period to provide the required information
          may be extended once by an additional 45 days when reasonably necessary and with prior
          notice. Any disclosures We provide will only cover the 12-month period preceding the
          verifiable request&rsquo;s receipt.
        </LegalP>
      </>
    ),
  },
  {
    id: "do-not-sell-my-personal-information",
    title: "Do Not Sell My Personal Information",
    body: (
      <>
        <LegalP>
          You have the right to opt-out of the sale of Your personal information. Once We receive
          and confirm a verifiable consumer request from You, we will stop selling Your personal
          information. To exercise Your right to opt-out, please contact Us.
        </LegalP>
        <LegalP>
          The Service Providers we partner with (for example, our analytics or advertising partners)
          may use technology on the Service that sells personal information as defined by the
          CCPA/CPRA law. If you wish to opt out of the use of Your personal information for
          interest-based advertising purposes and these potential sales as defined under CCPA/CPRA
          law, you may do so by following the instructions below.
        </LegalP>
        <LegalP>
          Please note that any opt out is specific to the browser You use. You may need to opt out
          on every browser that You use.
        </LegalP>

        <LegalH3>Website</LegalH3>
        <LegalP>
          You can opt out of receiving ads that are personalized as served by our Service Providers
          by following our instructions presented on the Service:
        </LegalP>
        <LegalUL>
          <LegalLI>
            The NAI&rsquo;s opt-out platform:{" "}
            <LegalLink href="http://www.networkadvertising.org/choices/" external>
              networkadvertising.org/choices
            </LegalLink>
          </LegalLI>
          <LegalLI>
            The EDAA&rsquo;s opt-out platform:{" "}
            <LegalLink href="http://www.youronlinechoices.com/" external>
              youronlinechoices.com
            </LegalLink>
          </LegalLI>
          <LegalLI>
            The DAA&rsquo;s opt-out platform:{" "}
            <LegalLink href="http://optout.aboutads.info/?c=2&lang=EN" external>
              optout.aboutads.info
            </LegalLink>
          </LegalLI>
        </LegalUL>

        <LegalH3>Mobile Devices</LegalH3>
        <LegalP>
          Your mobile device may give You the ability to opt out of the use of information about the
          apps You use in order to serve You ads that are targeted to Your interests:
        </LegalP>
        <LegalUL>
          <LegalLI>
            &ldquo;Opt out of Interest-Based Ads&rdquo; or &ldquo;Opt out of Ads
            Personalization&rdquo; on Android devices
          </LegalLI>
          <LegalLI>&ldquo;Limit Ad Tracking&rdquo; on iOS devices</LegalLI>
        </LegalUL>
        <LegalP>
          You can also stop the collection of location information from Your mobile device by
          changing the preferences on Your mobile device.
        </LegalP>
      </>
    ),
  },
  {
    id: "limit-sensitive-personal-information",
    title: "Limit the Use or Disclosure of Sensitive Personal Information",
    body: (
      <>
        <LegalP>
          If You are a California resident, You have the right to limit the use and disclosure of
          Your sensitive personal information to that use which is necessary to perform the services
          or provide the goods reasonably expected by an average consumer who requests such services
          or goods.
        </LegalP>
        <LegalP>
          We collect, use and disclose sensitive personal information in ways that are necessary to
          provide the Service.
        </LegalP>
      </>
    ),
  },
  {
    id: "do-not-track-policy",
    title: '"Do Not Track" Policy under CalOPPA',
    body: (
      <>
        <LegalP>Our Service does not respond to Do Not Track signals.</LegalP>
        <LegalP>
          However, some third party websites do keep track of Your browsing activities. If You are
          visiting such websites, You can set Your preferences in Your web browser to inform
          websites that You do not want to be tracked. You can enable or disable DNT by visiting the
          preferences or settings page of Your web browser.
        </LegalP>
      </>
    ),
  },
  {
    id: "shine-the-light-and-minors",
    title: "California Shine the Light & Minor Users",
    body: (
      <>
        <LegalH3>Shine the Light (Cal. Civ. Code &sect; 1798)</LegalH3>
        <LegalP>
          Under California Civil Code Section 1798 (California&rsquo;s Shine the Light law),
          California residents with an established business relationship with us can request
          information once a year about sharing their Personal Data with third parties for the third
          parties&rsquo; direct marketing purposes.
        </LegalP>

        <LegalH3>Minor Users (Business and Professions Code &sect; 22581)</LegalH3>
        <LegalP>
          California Business and Professions Code Section 22581 allows California residents under
          the age of 18 who are registered users of online sites, services or applications to
          request and obtain removal of content or information they have publicly posted.
        </LegalP>
        <LegalP>
          To request removal of such data, and if You are a California resident, You can contact Us
          using the contact information provided below, and include the email address associated
          with Your account. Be aware that Your request does not guarantee complete or comprehensive
          removal of content or information posted online and that the law may not permit or require
          removal in certain circumstances.
        </LegalP>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    body: (
      <>
        <LegalP>
          Our Service does not address anyone under the age of 13. We do not knowingly collect
          personally identifiable information from anyone under the age of 13. If You are a parent
          or guardian and You are aware that Your child has provided Us with Personal Data, please
          contact Us. If We become aware that We have collected Personal Data from anyone under the
          age of 13 without verification of parental consent, We take steps to remove that
          information from Our servers.
        </LegalP>
        <LegalP>
          If We need to rely on consent as a legal basis for processing Your information and Your
          country requires consent from a parent, We may require Your parent&rsquo;s consent before
          We collect and use that information.
        </LegalP>
      </>
    ),
  },
  {
    id: "links-to-other-websites",
    title: "Links to Other Websites",
    body: (
      <>
        <LegalP>
          Our Service may contain links to other websites that are not operated by Us. If You click
          on a third party link, You will be directed to that third party&rsquo;s site. We strongly
          advise You to review the Privacy Policy of every site You visit.
        </LegalP>
        <LegalP>
          We have no control over and assume no responsibility for the content, privacy policies or
          practices of any third party sites or services.
        </LegalP>
      </>
    ),
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "Changes to this Privacy Policy",
    body: (
      <>
        <LegalP>
          We may update Our Privacy Policy from time to time. We will notify You of any changes by
          posting the new Privacy Policy on this page.
        </LegalP>
        <LegalP>
          We will let You know via email and/or a prominent notice on Our Service, prior to the
          change becoming effective and update the &ldquo;Last updated&rdquo; date at the top of
          this Privacy Policy.
        </LegalP>
        <LegalP>
          You are advised to review this Privacy Policy periodically for any changes. Changes to
          this Privacy Policy are effective when they are posted on this page.
        </LegalP>
      </>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: (
      <>
        <LegalP>If you have any questions about this Privacy Policy, You can contact us:</LegalP>
        <LegalCallout title="Privacy questions">
          <p>
            <LegalStrong>By email:</LegalStrong>{" "}
            <LegalLink href="mailto:joseph@maxmarketpros.com">joseph@maxmarketpros.com</LegalLink>
          </p>
          <p className="mt-1.5">
            <LegalStrong>By phone:</LegalStrong>{" "}
            <LegalLink href="tel:+19496030389">949.603.0389</LegalLink>
          </p>
          <p className="mt-1.5">
            <LegalStrong>By mail:</LegalStrong> Max Market Pros, 2600 Michelson Dr 16th Fl, Irvine,
            CA 92612
          </p>
        </LegalCallout>
      </>
    ),
  },
]

export default function Page() {
  return (
    <main>
      <Navbar />
      <LegalShell
        eyebrow="Privacy"
        title="Privacy Policy"
        lastUpdated="May 13, 2024"
        crumb="Privacy Policy"
        intro={
          <>
            This Privacy Policy describes Our policies and procedures on the collection, use and
            disclosure of Your information when You use the Service and tells You about Your
            privacy rights and how the law protects You. By using the Service, You agree to the
            collection and use of information in accordance with this Privacy Policy.
          </>
        }
        sibling={{
          label: "Terms & Conditions",
          href: "/terms",
          description:
            "The rules that govern how you use our website and services — read these alongside this policy.",
        }}
        sections={sections}
      />
      <JsonLd />
    </main>
  )
}

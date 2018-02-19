/**
 * @author Maria Fernanda Serna
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import styles from './style';

const help = require('./../../images/icons-buzz/icon_help.png');
const imgBack = require('./../../images/icons-buzz/forward.png');
const background = require('./../../images/bg-new-account.png');
const buzzLogo = require('./../../images/buzz.png');

class PrivacyPage extends Component {

  backPress() {
    const backAction = NavigationActions.back({ key: null });
    this.props.navigation.dispatch(backAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={background} style={[styles.container]} resizeMode="cover">
          <View style={styles.header}>
            <View style={{ marginLeft: 10, alignItems: 'center' }}>
              <Image source={help} resizeMode="contain" style={{ marginLeft: 10, width: 27, height: 27 }} />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Image style={styles.logo} source={buzzLogo} resizeMode="contain" />
            </View>
            <View style={{ marginRight: 10 }}>
              <TouchableOpacity onPress={() => this.backPress()}>
                <Image source={imgBack} resizeMode="contain" style={{ marginLeft: 10, width: 20, height: 20 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.topHeight]}>
            <View style={styles.titlePage}><Text style={{ marginRight: 10, fontSize: 40, fontWeight: 'bold' }}>Privacy Policy</Text></View>

            <ScrollView style={styles.containerText}>
            <Text>Last updated: July 06, 2017{'\n'}</Text>

            <Text>Encore Status Entertainment L.L.C. ("us", "we", or "our")
              operates the BuzzCutz mobile application (the "Service").{'\n'}</Text>

            <Text>This page informs you of our policies regarding the collection,
                use and disclosure of Personal Information when you use our Service.{'\n'}</Text>

            <Text>We will not use or share your information with anyone except as described in
            this Privacy Policy.{'\n'}</Text>

            <Text>We use your Personal Information for providing and improving the Service.
               By using the Service, you agree to the collection and use of information in
               accordance with this policy. Unless otherwise defined in this Privacy Policy,
                terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.{'\n'}{'\n'}</Text>

            <Text style={styles.titleTextPage}>Information Collection And Use </Text>
            <Text>While using our Service, we may ask you to provide us with certain personally
                identifiable information that can be used to contact or identify you.
                Personally identifiable information may include,
                but is not limited to, your email address ("Personal Information").{'\n'}</Text>

          <Text>We collect this information for the purpose of providing the Service,
            identifying and communicating with you, responding to your requests/inquiries,
            servicing your purchase orders, and improving our services.{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>Log Data </Text>
          <Text>When you access the Service by or through a mobile device,
            we may collect certain information automatically, including,
            but not limited to, the type of mobile device you use,
            your mobile device unique ID, the IP address of your mobile device,
            your mobile operating system, the type of mobile Internet browser you use and
            other statistics ("Log Data”).{'\n'}</Text>

          <Text>In addition, we may use third party services such as Google Analytics that collect,
               monitor and analyze this type of information in order to increase our Service's
               functionality. These third party service providers have their own privacy policies
                addressing how they use such information.{'\n'}{'\n'}</Text>

          <Text  style={styles.titleTextPage}>Cookies</Text>
          <Text>Cookies are files with a small amount of data,
            which may include an anonymous unique identifier.
             Cookies are sent to your browser from a web site and transferred to your device.
             We use cookies to collect information in order to improve our services for you.{'\n'}</Text>

          <Text>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            The Help feature on most browsers provide information on how to accept cookies,
            disable cookies or to notify you when receiving a new cookie.{'\n'}</Text>

          <Text>If you do not accept cookies, you may not be able to use some features of our Service and
            we recommend that you leave them turned on.{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>Behavioral Remarketing</Text>
          <Text>Encore Status Entertainment L.L.C. uses remarketing services to advertise on third party
            web sites to you after you visited our Service.
            We, and our third party vendors, use cookies to inform,
            optimize and serve ads based on your past visits to our Service.{'\n'}</Text>
          <Text style={{ marginLeft: 20 }}>Google{'\n'}</Text>
          <Text style={{ marginLeft: 20 }}>Google AdWords remarketing service is provided by Google Inc.{'\n'}</Text>
          <Text style={{ marginLeft: 20 }}>You can opt-out of Google Analytics for Display Advertising and customize
             the Google Display Network ads by visiting the Google Ads
             Settings page: http://www.google.com/settings/ads{'\n'}</Text>
          <Text style={{ marginLeft: 20 }} >Google also recommends installing the Google Analytics
            Opt-out Browser Add-on - https://tools.google.com/dlpage/gaoptout - for your web browser.
            Google Analytics Opt-out Browser Add-on provides visitors with the
            ability to prevent their data from being collected and used by Google Analytics.{'\n'}</Text>
          <Text style={{ marginLeft: 20 }} >For more information on the privacy practices of Google,
            please visit the Google Privacy Terms web page:
            http://www.google.com/intl/en/policies/privacy/{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>Service Providers</Text>
          <Text>We may employ third party companies and individuals to facilitate our Service,
            to provide the Service on our behalf, to perform Service-related services
            and/or to assist us in analyzing how our Service is used.{'\n'}</Text>

          <Text>These third parties have access to your Personal Information only to perform
             specific tasks on our behalf and are obligated not to disclose or use your
             information for any other purpose.{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>Compliance With Laws</Text>
          <Text>We will disclose your Personal Information where required to do so by law or
            subpoena or if we believe that such action is necessary to comply with the
            law and the reasonable requests of law enforcement or to protect the security
            or integrity of our Service.{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>Security</Text>
          <Text>The security of your Personal Information is important to us, and we strive
            to implement and maintain reasonable, commercially acceptable security procedures
             and practices appropriate to the nature of the information we store, in order to
             protect it from unauthorized access, destruction, use, modification, or disclosure.{'\n'}</Text>

          <Text>However, please be aware that no method of transmission over the internet,
             or method of electronic storage is 100% secure and we are unable to guarantee the
              absolute security of the Personal Information we have collected from you.{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>International Transfer</Text>
          <Text>Your information, including Personal Information,
            may be transferred to — and maintained on — computers located
             outside of your state, province, country or other governmental
             jurisdiction where the data protection laws may differ than those from your jurisdiction.{'\n'}</Text>

          <Text>If you are located outside United States and choose to provide information to us,
            please note that we transfer the information, including Personal Information,
            to United States and process it there.{'\n'}</Text>

          <Text>Your consent to this Privacy Policy followed by your
            submission of such information represents your agreement to that transfer.{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>Links To Other Sites</Text>
          <Text>Our Service may contain links to other sites that are not
             operated by us. If you click on a third party link,
             you will be directed to that third party's site.
              We strongly advise you to review the Privacy Policy of every site you visit.{'\n'}</Text>

          <Text>We have no control over, and assume no responsibility
            for the content, privacy policies or practices of any third party sites or services.{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>Children's Privacy</Text>
          <Text>Only persons age 18 or older have permission to access our Service.
            Our Service does not address anyone under the age of 13 (“Children").{'\n'}</Text>

          <Text>We do not knowingly collect personally identifiable information
            from children under 13. If you are a parent or guardian and you learn that
             your Children have provided us with Personal Information, please contact us.
             If we become aware that we have collected Personal Information from a children
             under age 13 without verification of parental consent, we take steps to remove
             that information from our servers.{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>Changes To This Privacy Policy</Text>
          <Text>This Privacy Policy is effective as of July 06,
            2017 and will remain in effect except with respect to any changes in its provisions
            in the future, which will be in effect immediately after being posted on this page.{'\n'}</Text>

          <Text>We reserve the right to update or change our Privacy Policy at any
            time and you should check this Privacy Policy periodically. Your continued use of the
            Service after we post any modifications to the Privacy Policy on this page will constitute
             your acknowledgment of the modifications and your consent to abide and be bound by the modified
             Privacy Policy.{'\n'}</Text>

          <Text>If we make any material changes to this Privacy Policy,
             we will notify you either through the email address you have provided us,
             or by placing a prominent notice on our website.{'\n'}{'\n'}</Text>

          <Text style={styles.titleTextPage}>Contact Us</Text>
          <Text>If you have any questions about this Privacy Policy, please contact us.{'\n'}{'\n'}</Text>

            </ScrollView>
            <View style={[styles.titlePage, { marginBottom:40 }]}></View>
          </View>
        </Image>
      </View>
    );
  }
}

export default PrivacyPage;

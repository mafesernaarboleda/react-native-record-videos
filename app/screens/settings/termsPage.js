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

class TermsPage extends Component {

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
          <View style={styles.topHeight}>
          <View style={styles.titlePage}><Text style={{ marginRight: 10, fontSize: 35, fontWeight: 'bold' }}>Terms and Conditions</Text></View>
          <ScrollView style={styles.containerText}>
              <Text>Last updated: July 06, 2017{'\n'}</Text>

              <Text>Please read these Terms and Conditions ("Terms", "Terms and Conditions")
                carefully before using the BuzzCutz mobile application (the "Service")
                 operated by Encore Status Entertainment L.L.C. ("us", "we", or “our").{'\n'}</Text>

              <Text>Your access to and use of the Service is conditioned upon your acceptance of and
                compliance with these Terms. These Terms apply to all visitors, users and others who
                wish to access or use the Service.{'\n'}</Text>

              <Text>By accessing or using the Service you agree to be bound by these Terms.
                 If you disagree with any part of the terms then you do not have permission
                 to access the Service.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Communications</Text>
              <Text>By creating an Account on our service, you agree to subscribe to newsletters,
                 marketing or promotional materials and other information we may send.
                 However, you may opt out of receiving any, or all, of these communications
                 from us by following the unsubscribe link or instructions provided in any email we send.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Purchases</Text>
              <Text>If you wish to purchase any product or service made available through the Service ("Purchase"),
                you may be asked to supply certain information relevant to your Purchase including,
                 without limitation, your credit card number, the expiration date of your credit card,
                 your billing address, and your shipping information.{'\n'}</Text>

              <Text>You represent and warrant that: (i) you have the legal right to use any credit card(s)
                or other payment method(s) in connection with any Purchase; and that (ii)
                the information you supply to us is true, correct and complete.{'\n'}</Text>

              <Text>The service may employ the use of third party services for the purpose
                 of facilitating payment and the completion of Purchases. By submitting your information,
                 you grant us the right to provide the information to these third parties subject to our Privacy Policy.{'\n'}</Text>

              <Text>We reserve the right to refuse or cancel your order at any time for reasons
                 including but not limited to: product or service availability, errors in the
                  description or price of the product or service, error in your order or other reasons.{'\n'}</Text>

              <Text>We reserve the right to refuse or cancel your order if fraud or an unauthorized or
                illegal transaction is suspected.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Availability, Errors and Inaccuracies</Text>
              <Text>We are constantly updating product and service offerings on the Service.
                We may experience delays in updating information on the Service and in our advertising on other web sites.
                The information found on the Service may contain errors or inaccuracies and may not be complete or current.
                Products or services may be mispriced, described inaccurately, or unavailable on the
                Service and we cannot guarantee the accuracy or completeness of any information found on the Service.{'\n'}</Text>

              <Text>We therefore reserve the right to change or update information and to correct errors,
                inaccuracies, or omissions at any time without prior notice.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Content</Text>
              <Text>Our Service allows you to post, link, store, share and otherwise make available certain information,
                text, graphics, videos, or other material ("Content").
                You are responsible for the Content that you post on or through the Service,
                 including its legality, reliability, and appropriateness.{'\n'}</Text>

              <Text>By posting Content on or through the Service, You represent and warrant that: (i)
                the Content is yours (you own it) and/or you have the right to use it and the right
                 to grant us the rights and license as provided in these Terms, and (ii) that the posting
                 of your Content on or through the Service does not violate the privacy rights, publicity rights,
                 copyrights, contract rights or any other rights of any person or entity.
                 We reserve the right to terminate the account of anyone found to be infringing on a copyright.{'\n'}</Text>

              <Text>You retain any and all of your rights to any Content you submit,
                post or display on or through the Service and you are responsible for protecting those rights.
                We take no responsibility and assume no liability for Content you or any third party posts on or
                through the Service. However, by posting Content using the Service you grant us the right and license
                to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and
                through the Service. You agree that this license includes the right for us to make your
                Content available to other users of the Service, who may also use your Content subject to these Terms.{'\n'}</Text>

              <Text>Encore Status Entertainment L.L.C. has the right but not the obligation to monitor and edit
                all Content provided by users.{'\n'}</Text>

              <Text>In addition, Content found on or through this Service are the property of
                Encore Status Entertainment L.L.C. or used with permission. You may not distribute,
                modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part,
                for commercial purposes or for personal gain, without express advance written permission from us.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Accounts</Text>
              <Text>When you create an account with us, you guarantee that you are above the age of 18,
                and that the information you provide us is accurate, complete, and current at all times.
                Inaccurate, incomplete, or obsolete information may result in the immediate termination
                of your account on the Service.{'\n'}</Text>

              <Text>You are responsible for maintaining the confidentiality of your account and password,
                 including but not limited to the restriction of access to your computer and/or account.
                 You agree to accept responsibility for any and all activities or
                 actions that occur under your account and/or password,
                whether your password is with our Service or a third-party service.
                You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.{'\n'}</Text>

              <Text>You may not use as a username the name of another person or entity or that is not lawfully
                available for use, a name or trademark that is subject to any rights of another person or
                entity other than you, without appropriate authorization. You may not use as a username any
                 name that is offensive, vulgar or obscene.{'\n'}</Text>

              <Text>We reserve the right to refuse service, terminate accounts, remove or edit content,
                 or cancel orders in our sole discretion.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Intellectual Property</Text>
              <Text>The Service and its original content (excluding Content provided by users),
                features and functionality are and will remain the exclusive property of Encore Status
                Entertainment L.L.C. and its licensors. The Service is protected by copyright, trademark,
                and other laws of both the United States and foreign countries. Our trademarks and trade
                dress may not be used in connection with any product or service without the prior written
                consent of Encore Status Entertainment L.L.C.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Links To Other Web Sites</Text>
              <Text>Our Service may contain links to third party web sites or services that are not
                 owned or controlled by Encore Status Entertainment L.L.C.{'\n'}</Text>

              <Text>Encore Status Entertainment L.L.C. has no control over, and assumes no responsibility
                for the content, privacy policies, or practices of any third party web sites or services.
                We do not warrant the offerings of any of these entities/individuals or their websites.{'\n'}</Text>

              <Text>You acknowledge and agree that Encore Status Entertainment L.L.C. shall not be responsible or
                liable, directly or indirectly, for any damage or loss caused or alleged to be caused
                 by or in connection with use of or reliance on any such content, goods or services available
                  on or through any such third party web sites or services.{'\n'}</Text>

              <Text>We strongly advise you to read the terms and conditions and privacy policies
                 of any third party web sites or services that you visit.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Termination</Text>
              <Text>We may terminate or suspend your account and bar access to the Service immediately,
                without prior notice or liability, under our sole discretion,
                for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.{'\n'}</Text>

              <Text>If you wish to terminate your account, you may simply discontinue using the Service.{'\n'}</Text>

              <Text>All provisions of the Terms which by their nature should survive termination shall survive
                termination, including, without limitation, ownership provisions, warranty disclaimers,
                indemnity and limitations of liability.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Indemnification</Text>
              <Text>You agree to defend, indemnify and hold harmless Encore Status Entertainment L.L.C.
                and its licensee and licensors, and their employees, contractors, agents, officers and directors,
                from and against any and all claims, damages, obligations, losses, liabilities,
                costs or debt, and expenses (including but not limited to attorney's fees),
                resulting from or arising out of a) your use and access of the Service,
                by you or any person using your account and password; b) a breach of these Terms, or c)
                Content posted on the Service.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Limitation Of Liability</Text>
              <Text>In no event shall Encore Status Entertainment L.L.C., nor its directors,
                employees, partners, agents, suppliers, or affiliates, be liable for any indirect,
                incidental, special, consequential or punitive damages, including without limitation,
                loss of profits, data, use, goodwill, or other intangible losses,
                resulting from (i) your access to or use of or inability to access or use the Service;
                (ii) any conduct or content of any third party on the Service; (iii) any
                content obtained from the Service; and (iv) unauthorized access, use or alteration
                of your transmissions or content, whether based on warranty, contract, tort (including negligence)
                or any other legal theory, whether or not we have been informed of the possibility of such damage,
                and even if a remedy set forth herein is found to have failed of its essential purpose.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Disclaimer</Text>
              <Text>Your use of the Service is at your sole risk. The Service is provided on
                an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties
                of any kind, whether express or implied, including, but not limited to,
                implied warranties of merchantability, fitness for a particular purpose,
                non-infringement or course of performance.{'\n'}</Text>

              <Text>Encore Status Entertainment L.L.C. its subsidiaries, affiliates, and its licensors do
                not warrant that a) the Service will function uninterrupted, secure or available at any
                particular time or location; b) any errors or defects will be corrected;
                c) the Service is free of viruses or other harmful components;
                or d) the results of using the Service will meet your requirements.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Exclusions</Text>
              <Text>Some jurisdictions do not allow the exclusion of certain warranties or the exclusion
                or limitation of liability for consequential or incidental damages,
                so the limitations above may not apply to you.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Governing Law</Text>
              <Text>These Terms shall be governed and construed in accordance with the laws of New York,
                United States, without regard to its conflict of law provisions.{'\n'}</Text>

              <Text>Our failure to enforce any right or provision of these Terms will not be
                considered a waiver of those rights. If any provision of these Terms is held
                to be invalid or unenforceable by a court, the remaining provisions of these Terms will
                remain in effect. These Terms constitute the entire agreement between us regarding our Service,
                and supersede and replace any prior agreements we might have had between us regarding the Service.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Changes</Text>
              <Text>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                If a revision is material we will provide at least 15 days notice prior to any new terms taking effect.
                What constitutes a material change will be determined at our sole discretion.{'\n'}</Text>

              <Text>By continuing to access or use our Service after any revisions become effective,
                you agree to be bound by the revised terms. If you do not agree to the new terms,
                you are no longer authorized to use the Service.{'\n'}{'\n'}</Text>

              <Text style={styles.titleTextPage}>Contact Us</Text>
              <Text>If you have any questions about these Terms, please contact us.{'\n'}{'\n'}</Text>
           </ScrollView>
           <View style={[styles.titlePage, { marginBottom:40 }]}></View>
          </View>
        </Image>
      </View>
    );
  }
}

export default TermsPage;

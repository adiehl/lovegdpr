import {Letter} from './Letter';

export class Templates {
  Templates: Letter[] = [
    {
      name: 'Art 15 - Request Data', // text taken fro https://www.datarequests.org/blog/sample-letter-gdpr-access-request/
      titleText : 'Request to access personal data according to Article 15 GDPR',
      introText : 'To Whom It May Concern:\n' +
          '\n\n' +
          'I am hereby requesting access according to Article 15 GDPR. Please confirm whether or not you are processing ' +
          'personal data (as defined by Article 4(1) and (2) GDPR) concerning me.\n ' +
          'In case you are, I am hereby requesting access to the following information pursuant to Article 15 GDPR: ' +
          '\n',
      endClause : '\n' +
          'If you are transferring my personal data to a third country or an international organisation, I request to be informed ' +
          'about the appropriate safeguards according to Article 46 GDPR concerning the transfer.\n\n ' +
          'My request explicitly includes any other services and companies for which you are the controller as defined by Article 4(7) ' +
          'GDPR. \n\n ' +
          'As laid down in Article 12(3) GDPR, you have to provide the requested information to me without undue delay and in any ' +
          'event within one month of receipt of the request. According to Article 15(3) GDPR, you have to answer this request without ' +
          'cost to me. \n\n If you do not answer my request within the stated period, I am reserving the right to take legal action ' +
          'against you and to lodge a complaint with the responsible supervisory authority. \n\n\n ' +
          'Yours sincerely,\n',
      textblocks : [
        { name : 'text1', content: 'all personal data concerning me that you have stored;',
          selected: true },
        { name : 'text2', content: 'the purposes of the processing; (lit. a)',
          selected : true },
        { name : 'text3', content: 'the categories of personal data concerned; (lit. b)',
          selected : true },
        { name : 'text4', content: 'the recipients or categories of recipient to whom the personal data have been or will be disclosed; ' +
          '(lit. c)',
          selected : true },
        { name : 'text5', content: 'where possible, the envisaged period for which the personal data will be stored, or, if not ' +
              'possible, the criteria used to determine that period; (lit. d)',
          selected : true },
        { name : 'text6', content: 'where the personal data are not collected from the data subject, any available information as to ' +
              'their source;',
          selected : true },
        { name : 'text7', content: 'the existence of automated decision-making, including profiling, referred to in Article 22(1) ' +
              'and (4) GDPR and, at least in those cases, meaningful information about the logic involved, as well as the significance ' +
              'and the envisaged consequences of such processing for me.',
          selected : true },
      ]
    },
  ];
}

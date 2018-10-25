console.log('bot is powering up...');

const pageSelectors = {
    tabelOfContents: {
        hint: {
            selector: 'body > div.wrapper > div:nth-child(4) > div.body-content > div > form > table > tbody > tr:nth-child(1) > td > span',
            expectedText: 'Course Table of Contents  (bookmark this site)'
        },
        continueButton: {
            selector: 'body > div.wrapper > div:nth-child(4) > div:nth-child(2) > footer > div > div > div > div.col-xs-8.text-right > a',
        }
    },
    introductionPages: {
        hint: {
            selector: 'body > div.wrapper > div:nth-child(4) > div.body-content > div > div:nth-child(2) > table > tbody > tr > td > div > div.crs_modtitle',
            expectedText: 'Introduction'
        },
        continueButton: {
            selector: 'body > div.wrapper > div:nth-child(4) > div:nth-child(2) > footer > div > div > div > div.col-xs-4.text-right > a'
        }
    },
    pageWithATimer: {
        hint: {
            selector: 'body > div.wrapper > div:nth-child(4) > div:nth-child(2) > footer > div > div > div:nth-child(2) > div.col-xs-12.col-sm-4.timer-desk.text-right > div > form',
            expectedText: 'Time Remaining:  '
        },
        timer: {
            selector: 'body > div.wrapper > div:nth-child(4) > div:nth-child(2) > footer > div > div > div:nth-child(2) > div.col-xs-12.col-sm-4.timer-desk.text-right > div > form > input[type=\"text\"]',
            expectedText: '0:00',
            altExpectedText: '0:0-1'
        },
        continueButton: {
            selector: 'body > div.wrapper > div:nth-child(4) > div:nth-child(2) > footer > div > div > div:nth-child(1) > div.col-xs-4.text-right > a'
        }
    },
    authenticationPage: {
        hint: {
            selector: 'body > div.wrapper > div:nth-child(4) > div.body-content > div > form > table:nth-child(1) > tbody > tr:nth-child(1) > td > span',
            expectedText: 'Authentication'
        },
        authQuestion: {
            selector: 'body > div.wrapper > div:nth-child(4) > div.body-content > div > form > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > b',
            expectedQuestions: [
                {
                    question: 'What are the last 4 digits of your phone number?',
                    answer: 'PLACE_HOLDER'
                }
            ]
        },
        inputField: {
            selector: 'body > div.wrapper > div:nth-child(4) > div.body-content > div > form > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > select',
        }
    },
    questionPage: {
        hint: {
            selector: 'body > div.wrapper > div:nth-child(4) > div.body-content > div > form > table > tbody > tr:nth-child(1) > td > span',
        },
        questionBody: {
            selector: 'body > div.wrapper > div:nth-child(4) > div.body-content > div > form > div > table > tbody'
        },
        expectedQuestions: [
            {
                question: 'You can reduce driving risks by keeping your vehicle in top condition.',
                possibleAnswers: ['True', 'False'],
                answer: 'True'
            }
        ]
    }
};

class iDriveSafelyBot {
    static amIOnTableOfContents() {
        console.log('Checking if on Table of Contents...');
        let iAmOnPage = false;

        try {
            iAmOnPage = document.querySelector(pageSelectors.tabelOfContents.hint.selector).innerText === pageSelectors.tabelOfContents.hint.expectedText;
        } catch (e) {}
        console.log(`I am on Table of Contents: ${iAmOnPage}`);
        return iAmOnPage;
    }

    static continueFromTableOfContents() {
        console.log('Continuing from Table of Contents...');
        document.querySelector(pageSelectors.tabelOfContents.continueButton.selector).click();
    }

    static amIOnIntroductionPage() {
        console.log('Checking if on an Introduction page...');
        let iAmOnPage = false;

        try {
            iAmOnPage = document.querySelector(pageSelectors.introductionPages.hint.selector).innerText === pageSelectors.introductionPages.hint.expectedText;
        } catch (e) {}

        console.log(`I am on an Introduction page: ${iAmOnPage}`);
        return iAmOnPage;
    }

    static continueFromIntroductionPage() {
        console.log('Continuing from Introduction page...');
        document.querySelector(pageSelectors.introductionPages.continueButton.selector).click();
    }

    static amIOnPageWithTimer() {
        console.log('Checking if on a page with a timer...');
        let iAmOnPage = false;

        try {
            iAmOnPage = document.querySelector(pageSelectors.pageWithATimer.hint.selector).innerText === pageSelectors.pageWithATimer.hint.expectedText;
        } catch (e) {}

        console.log(`I am on a page with a timer: ${iAmOnPage}`);
        return iAmOnPage;
    }

    static checkIfTimerZero() {
        console.log('Checking if timer is zero...');
        let timerIsZero = false;

        try {
            timerIsZero = document.querySelector(pageSelectors.pageWithATimer.timer.selector).value === pageSelectors.pageWithATimer.timer.expectedText ||
                document.querySelector(pageSelectors.pageWithATimer.timer.selector).value === pageSelectors.pageWithATimer.timer.altExpectedText;
        } catch(e) {}

        if (timerIsZero) {
            console.log(`Timer for page has reached zero: ${timerIsZero}`);
            return timerIsZero;
        }
    }

    static continueFromPageWithTimer() {
        console.log('Continuing from page with timer...');
        document.querySelector(pageSelectors.pageWithATimer.continueButton.selector).click();
    }

    static amIOnAuthPage() {
        console.log('Checking if on auth page...');
        let iAmOnPage = false;

        try {
            iAmOnPage = document.querySelector(pageSelectors.authenticationPage.hint.selector).innerText === pageSelectors.authenticationPage.hint.expectedText;
        } catch (e) {}

        console.log(`I am on an auth page: ${iAmOnPage}`);
        return iAmOnPage;
    }

    static getAuthQuestion() {
        console.log('Attempting to find auth question...');
        let authQuestion = undefined;
        let authQuestionFoundInExpectedQuestions = undefined;

        try {
            authQuestion = document.querySelector(pageSelectors.authenticationPage.authQuestion.selector).innerText;

            if (authQuestion !== undefined) {
                authQuestionFoundInExpectedQuestions = pageSelectors.authenticationPage.authQuestion.expectedQuestions.forEach(expectedQuestion => {
                    if (expectedQuestion.question === authQuestion) {
                        return expectedQuestion;
                    } else {
                        return;
                    }
                });
                console.log('2', authQuestionFoundInExpectedQuestions);
            }
        } catch(e) {
            console.log(e);
        }

        return authQuestionFoundInExpectedQuestions;
    }

    static amIOnQuestionPage() {
        console.log('Checking if on question page...');
        let iAmOnPage = false;

        try {
            const arrayOfStrings = document.querySelector(pageSelectors.questionPage.hint.selector).innerText.split(' ');
            iAmOnPage = arrayOfStrings[0] === 'Question'
                        && !isNaN(arrayOfStrings[1])
                        && arrayOfStrings[2] === 'of'
                        && !isNaN(arrayOfStrings[3]);
        } catch (e) {}

        console.log(`I am on a question page: ${iAmOnPage}`);
        return iAmOnPage;
    }

    static getQuestion() {
        console.log('Attempting to find question...');
        let foundQuestion = false;

        try {
            const arrayOfBodyNodes = document.querySelector(pageSelectors.questionPage.questionBody.selector).childNodes;
            foundQuestion = arrayOfBodyNodes.forEach(node => {
                if (node.innerText !== undefined) {
                    pageSelectors.questionPage.expectedQuestions.forEach(expectedQuestion => {
                        console.log(node.innerText.trim() === expectedQuestion.question);
                        return node.innerText.trim() === expectedQuestion.question;
                    });
                }

                return false;
            });
        } catch (e) {}

        return foundQuestion;
    }
}

/**
 * ##########################################################
 * #################### SCRIPT - Start ######################
 * ##########################################################
 */

if (iDriveSafelyBot.amIOnTableOfContents()) {
    iDriveSafelyBot.continueFromTableOfContents();
} else if (iDriveSafelyBot.amIOnIntroductionPage()) {
    iDriveSafelyBot.continueFromIntroductionPage();
} else if (iDriveSafelyBot.amIOnPageWithTimer()) {
    const pageWithTimerInterval = setInterval(() => {
        if (iDriveSafelyBot.checkIfTimerZero()) {
            console.log('Clearing pageWithTimerInterval...');
            clearTimeout(pageWithTimerInterval);
            iDriveSafelyBot.continueFromPageWithTimer();
        }
    }, 1000);
} else if (iDriveSafelyBot.amIOnAuthPage()) {
    console.log(iDriveSafelyBot.getAuthQuestion());
} else if (iDriveSafelyBot.amIOnQuestionPage()) {
    console.log(iDriveSafelyBot.getQuestion());
}

/**
 * ##########################################################
 * #################### SCRIPT - END ########################
 * ##########################################################
 */
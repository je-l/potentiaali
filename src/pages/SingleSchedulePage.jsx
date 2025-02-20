import React from 'react'
import { useSelector } from 'react-redux'
import { Language } from '../components/partials/Language'
import { format } from 'date-fns'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'

import LanguageString from '../components/LanguageString'

const SingleSchedulePage = () => {
  const events = useSelector((state) => state.schedule.events)
  const { t, i18n } = useTranslation()
  let params = useParams()
  currentLocale = i18n.language
  let eventId = params.id
  if (!eventId) {
    return <span> {t('event-not-found')}</span>
  }
  if (events.length === 0) {
    return <span> {t('empty-schedule')}</span>
  }
  const event = events.find((evt) => Number(evt.id) === Number(eventId))
  if (event === undefined) {
    return <span> {t('event-not-found')}</span>
  }
  return (
    <>
      <section className="app-section">
        <Link to="/schedule">
          <h3>
            <i className="fas fa-chevron-left"></i>&nbsp;&nbsp;
            <span> {t('back-to-schedule')}</span>
          </h3>
        </Link>
      </section>
      <section className="app-section">
        <h1>
          <LanguageString languageObject={event.title} />
        </h1>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          <p>
            <LanguageString languageObject={event.description} />
          </p>
        </pre>
      </section>
      <section className="app-section">
        <ul className="event-info">
          <li>
            <span className="event-info-title">
              <i className="fas fa-map-marked-alt"></i>
            </span>
            <span className="event-info-value">
              <span> {t('event-location')}</span>
              {': '}
              {event.location}
            </span>
          </li>
          <li>
            <span className="event-info-title">
              <i className="fas fa-clock"></i>
            </span>
            <span className="event-info-value">
              <span> {t('event-time')}</span>
              {': '}
              <time>{format(event.startTime, 'HH.mm')}</time> -{' '}
              <time>{format(event.endTime, 'HH.mm')}</time>
            </span>
          </li>
          {event.language && (
            <li>
              <span className="event-info-title">
                <i className="fas fa-globe"></i>
              </span>
              <span className="event-info-value">
                <span> {t('event-language')}</span>
                {': '}
                <Language lang={event.language} />
              </span>
            </li>
          )}
          {event.speakers.length > 0 && (
            <li>
              <span className="event-info-title">
                <i className="fas fa-users"></i>
              </span>
              <span className="event-info-value">
                <span> {t('event-speakers')}</span>
                {': '}
                <ul className="event-speakers-container">
                  {event.speakers.map((speaker) => (
                    <li key={speaker}>{speaker}</li>
                  ))}
                </ul>
              </span>
            </li>
          )}
        </ul>
      </section>
      {event.link !== '' && (
        <section className="app-section">
          <a
            href={currentLocale === 'en' ? event.link_en : event.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>&nbsp;
            <span> {t('enrollment-link')}</span>
          </a>
        </section>
      )}
      <section className="app-section">
        <h2>{t('event-description')}</h2>
        <pre>
          <p className="event-full-description-container">
            {event.fullDescription ? (
              <LanguageString languageObject={event.fullDescription} />
            ) : (
              <span> {t('event-no-description')}</span>
            )}
          </p>
        </pre>
      </section>
    </>
  )
}

export default SingleSchedulePage

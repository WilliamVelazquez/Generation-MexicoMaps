import React from 'react';
import SvgImage from './SvgImage'

const Logo = (props) => (
  <SvgImage {...props}>
    <path d="M149.521277,15.9042553 C149.734043,16.7021277 148.93617,17.606383 148.723404,18.4574468 C149.042553,19.2021277 148.776596,19.5212766 148.297872,20.4255319 C146.914894,22.712766 146.329787,25.6914894 144.414894,28.2446809 C144.468085,26.6489362 145.425532,25 146.382979,23.6170213 C144.680851,24.8404255 143.776596,27.0744681 144.095745,28.6702128 C144.361702,28.7234043 144.148936,28.4042553 144.414894,28.2446809 C144.62766,28.2978723 144.414894,28.7765957 144.680851,28.4574468 C144.787234,28.6170213 144.414894,28.9361702 144.308511,28.9361702 C144.095745,29.8404255 144.574468,30.4787234 144.946809,31.2234043 C145,31.3297872 144.787234,31.4361702 144.787234,31.5425532 C144.946809,32.1276596 145.797872,32.6595745 146.595745,33.2446809 C146.968085,33.1382979 147.393617,33.3510638 147.819149,33.5106383 C146.648936,34.0957447 145.425532,34.787234 144.042553,34.0425532 C143.776596,33.9361702 144.095745,33.7234043 144.042553,33.6170213 C142.819149,32.8723404 142.765957,31.9148936 142.074468,31.1170213 C142.340426,30.9042553 141.914894,30.5851064 142.287234,30.5319149 C142.021277,29.3617021 142.12766,28.1914894 142.021277,26.9680851 C142.712766,25.9574468 142.712766,25.106383 143.085106,24.1489362 C143.138298,23.8829787 142.819149,24.0957447 142.87234,23.8829787 C143.829787,21.5425532 144.308511,19.4148936 145.265957,16.9148936 C144.680851,16.9148936 144.361702,17.287234 143.829787,17.393617 C143.723404,17.393617 143.510638,17.2340426 143.351064,17.287234 C142.446809,17.6595745 141.914894,19.0425532 140.957447,19.3617021 C141.170213,18.7234043 141.914894,18.2978723 142.340426,17.6595745 C141.489362,17.8191489 140.797872,19.1489362 140,19.6276596 C140.478723,18.3510638 141.755319,17.393617 142.659574,16.1170213 C142.446809,15.9574468 142.234043,16.2234043 142.074468,16.3297872 C142.180851,15.6382979 142.925532,15.3191489 143.297872,14.8404255 C141.648936,15.5851064 140.638298,17.606383 138.989362,19.5212766 C139.255319,19.5212766 139.468085,18.9361702 139.680851,18.7234043 C140,19.787234 137.925532,20.9042553 137.925532,22.0212766 C138.351064,21.8617021 138.404255,20.9042553 138.989362,21.0638298 C138.617021,21.4893617 138.457447,21.6489362 138.351064,22.1276596 C137.340426,22.287234 137.553191,23.7765957 136.968085,24.4680851 C137.074468,24.6808511 136.914894,24.893617 137.074468,25.106383 C135.478723,27.8191489 134.414894,30.7978723 132.074468,33.4042553 C131.968085,33.2978723 132.180851,33.0851064 132.074468,32.9787234 C131.595745,32.712766 131.276596,33.6170213 130.851064,33.6170213 C130.531915,33.4042553 130.744681,33.1382979 130.744681,32.8723404 C129.308511,32.9787234 128.882979,31.2765957 128.723404,30.4255319 C129.042553,30.0531915 129.148936,29.5212766 129.202128,29.0425532 C132.659574,24.7340426 134.255319,20.5319149 136.329787,16.3297872 C136.06383,16.4361702 135.744681,16.2234043 135.425532,16.3297872 C136.010638,15.7446809 136.489362,15.6382979 136.861702,15.106383 C137.553191,14.1489362 137.340426,12.4468085 138.617021,11.4893617 C139.148936,11.8085106 139.680851,11.9680851 140.425532,12.606383 C140.478723,13.1382979 140.478723,13.7234043 140.37234,14.3085106 C140.531915,14.3617021 140.744681,14.7340426 140.851064,14.4148936 C140.904255,14.5744681 140.851064,14.7340426 140.691489,14.9468085 C140.904255,14.9468085 141.06383,14.5212766 141.276596,14.4680851 C141.595745,14.5744681 141.170213,14.7340426 141.43617,14.8404255 C141.702128,14.787234 141.914894,14.6808511 142.12766,14.4680851 C142.340426,14.787234 142.5,14.5744681 142.712766,14.6808511 C143.351064,13.9361702 144.308511,13.2978723 145.319149,13.3510638 C145.531915,13.0851064 145.478723,12.8191489 145.797872,12.8191489 C146.06383,12.9255319 145.957447,13.0851064 145.797872,13.2446809 C146.170213,13.2978723 146.223404,13.0851064 146.276596,12.712766 C146.861702,13.3510638 147.393617,13.0851064 147.765957,13.3510638 C148.031915,13.4042553 147.819149,13.0851064 148.031915,13.1382979 C148.191489,13.5638298 148.404255,13.9361702 149.042553,14.3085106 C148.723404,14.6808511 149.095745,14.9468085 148.723404,15.3723404 C148.882979,15.4787234 148.989362,15.5851064 149.148936,15.6914894 C149.042553,15.9574468 148.989362,16.2234043 149.042553,16.4893617 C149.255319,16.4893617 149.361702,16.0638298 149.521277,15.9042553" id="Shape"></path>
    <path d="M148.191489,21.6489362 C148.244681,21.8085106 148.191489,21.9680851 148.031915,22.1808511 C147.712766,22.0744681 148.138298,21.8617021 148.191489,21.6489362" id="Shape"></path>
    <path d="M146.382979,23.6170213 C145.37234,25 144.468085,26.7021277 144.414894,28.2446809 C144.148936,28.3510638 144.361702,28.7234043 144.095745,28.6702128 C143.829787,27.0744681 144.734043,24.8404255 146.382979,23.6170213" id="Shape"></path>
    <path d="M128.510638,22.393617 C128.670213,21.9680851 129.468085,21.4893617 129.095745,21.1702128 C128.989362,21.5957447 128.510638,22.0212766 128.510638,22.393617 M130.744681,20.106383 C131.170213,19.6808511 131.542553,18.7765957 131.43617,18.2446809 C131.223404,18.8829787 130.797872,19.5212766 130.744681,20.106383 M133.191489,15.7978723 C133.297872,16.7553191 131.702128,17.8723404 131.808511,18.8829787 C132.074468,19.0957447 132.234043,18.5106383 132.446809,18.4574468 C131.914894,19.2021277 131.648936,20.4255319 130.851064,20.9042553 C130.106383,22.712766 129.095745,24.5212766 127.446809,26.2765957 C127.287234,26.4893617 127.553191,26.6489362 127.553191,26.8617021 C127.180851,27.6595745 126.648936,27.5 126.223404,28.1914894 C125.957447,27.9255319 126.489362,27.9255319 126.329787,27.712766 C125.638298,28.2978723 125.053191,29.4148936 124.414894,30.212766 C124.946809,30.106383 125.37234,29.2021277 125.904255,29.3617021 C125.478723,30.4255319 123.882979,31.2234043 122.978723,32.1276596 C122.925532,32.5 122.765957,32.8723404 122.393617,33.0851064 C122.180851,32.8723404 122.340426,32.606383 122.5,32.287234 C121.861702,32.8191489 121.170213,32.9787234 120.531915,33.4574468 C120.425532,33.3510638 120.638298,33.1382979 120.531915,33.0319149 C119.255319,33.6702128 117.819149,32.8723404 116.542553,32.5 C114.946809,29.787234 115,26.1170213 117.712766,23.1382979 C118.244681,21.1702128 119.574468,19.1489362 121.170213,17.1808511 C122.819149,15.1595745 123.989362,12.393617 126.170213,11.7021277 C127.393617,12.606383 128.351064,13.5638298 128.351064,14.6808511 C126.276596,16.1702128 124.574468,17.9787234 122.765957,20.3723404 C123.191489,20.6382979 123.989362,19.7340426 124.468085,18.9893617 C124.574468,19.9468085 122.340426,20.7978723 122.606383,21.9680851 C121.914894,22.5531915 121.702128,22.9787234 121.117021,23.8297872 C121.329787,23.9893617 121.382979,23.2446809 121.648936,23.5638298 C120.904255,25.1595745 119.840426,26.0106383 119.042553,27.5531915 C119.361702,27.4468085 119.62766,26.8085106 119.946809,26.4893617 C119.893617,27.3404255 119.148936,28.3510638 118.93617,29.2021277 C119.680851,28.8297872 120.319149,28.5638298 121.06383,28.1382979 C122.074468,27.5531915 122.765957,26.5425532 123.776596,25.7446809 C124.521277,25.212766 125.691489,24.9468085 126.117021,23.8829787 C126.329787,23.6702128 126.595745,23.6702128 126.808511,23.5106383 C128.776596,21.2765957 130.531915,18.8297872 131.43617,16.3297872 C131.861702,16.2234043 131.968085,15.9042553 132.553191,15.4255319 C132.340426,15.1595745 132.234043,15.6914894 131.968085,15.4255319 C132.074468,14.9468085 132.553191,14.787234 132.87234,14.4680851 C133.351064,14.6808511 132.287234,15.6914894 132.393617,16.1702128 C132.712766,16.4893617 132.87234,15.7978723 133.191489,15.7978723" id="Shape"></path>
    <path d="M131.489362,22.393617 C131.542553,22.7659574 131.276596,23.1382979 130.957447,23.2978723 C130.904255,23.0319149 131.329787,22.6595745 131.489362,22.393617" id="Shape"></path>
    <path d="M127.234043,28.1914894 C127.340426,28.6170213 126.861702,28.7234043 126.755319,29.1489362 C126.489362,28.8829787 127.12766,28.5106383 127.234043,28.1914894" id="Shape"></path>
    <path d="M126.329787,28.8297872 C126.648936,28.9361702 126.223404,29.4148936 126.06383,29.0425532 C126.117021,28.9361702 126.223404,28.7765957 126.329787,28.8297872" id="Shape"></path>
    <path d="M117.978723,5.42553191 C119.308511,5.42553191 120.585106,7.0212766 120.638298,8.03191489 C119.734043,8.61702128 118.776596,8.82978723 118.510638,10.1595745 C117.765957,8.67021277 117.87234,7.07446809 117.978723,5.42553191" id="Shape"></path>
    <path d="M107.287234,29.787234 C107.978723,28.6702128 109.148936,27.606383 109.308511,26.4361702 C108.510638,27.5 107.553191,28.6170213 107.287234,29.787234 M113.244681,17.2340426 C113.617021,17.8191489 113.297872,18.4574468 113.510638,19.0957447 C113.404255,19.4148936 113.244681,19.9468085 112.925532,20.0531915 C113.138298,20.3191489 113.297872,19.9468085 113.510638,20.2659574 C113.138298,20.9042553 112.606383,21.5957447 112.819149,22.1276596 C110.585106,25.212766 107.925532,29.1489362 106.648936,32.606383 C106.276596,32.4468085 105.851064,32.287234 105.585106,32.712766 C105.159574,32.5531915 105.638298,32.2340426 105.212766,32.0212766 C104.840426,31.8085106 104.521277,32.2340426 104.202128,32.393617 C103.723404,31.7553191 103.56383,31.0106383 103.191489,30.3723404 C103.93617,28.1382979 105.265957,25.7978723 106.223404,23.5638298 C106.808511,22.5531915 107.5,21.7021277 107.978723,20.8510638 C108.138298,20.5851064 108.085106,20.3191489 108.244681,20.0531915 C108.829787,19.0425532 109.62766,18.2446809 110,17.2340426 C110.212766,16.5957447 110.106383,15.7978723 110.957447,15.6382979 C111.914894,15.9574468 112.5,16.4893617 113.244681,17.2340426" id="Shape"></path>
    <path d="M80,22.8723404 C80.1595745,22.6595745 80.6382979,22.5531915 80.5851064,22.2340426 C80.3723404,22.2340426 79.9468085,22.5531915 80,22.8723404 M88.1382979,14.5212766 C87.287234,14.8404255 86.3297872,14.787234 85.5851064,15.9042553 C85.0531915,16.0638298 84.5212766,16.6489362 84.3617021,17.287234 C82.606383,18.5106383 81.9148936,20.2659574 80.6382979,21.9680851 C80.7978723,21.8617021 80.9042553,21.6489362 81.1170213,21.6489362 C80.9042553,22.8723404 79.4148936,23.8829787 79.2021277,25 C79.1489362,25.0531915 79.0957447,25.212766 79.2021277,25.106383 C79.3617021,24.787234 79.4148936,24.7340426 79.6808511,24.7340426 C79.6808511,25.2659574 78.9361702,25.9574468 79.0957447,26.4361702 C82.606383,23.6170213 86.0106383,18.7234043 88.1382979,14.5212766 M90.0531915,24.3085106 C90.1595745,24.0957447 90,23.9361702 89.893617,23.7765957 C89.6276596,23.9361702 90.106383,23.9893617 89.8404255,24.1489362 C89.9468085,24.2021277 90,24.2553191 90.0531915,24.3085106 M98.6702128,17.9255319 C99.3617021,16.8085106 100.585106,16.3297872 100.585106,15.4255319 C100,16.1702128 99.0425532,16.9680851 98.6702128,17.9255319 M113.297872,10.4255319 C112.925532,10.5851064 113.031915,11.0638298 112.659574,11.1702128 C112.446809,10.6382979 112.765957,10 111.914894,9.5212766 C109.62766,9.5212766 107.765957,12.393617 105.531915,13.5638298 C104.574468,14.0957447 103.191489,14.1489362 102.287234,15.7446809 C102.87234,15.5319149 103.244681,14.5212766 103.989362,14.5744681 C102.819149,16.3829787 101.223404,18.2978723 99.6808511,19.6808511 C100.106383,18.5638298 101.117021,17.8191489 101.702128,16.5957447 C100.106383,18.1382979 98.5638298,19.9468085 97.0744681,22.1276596 C97.4468085,21.9148936 97.7659574,21.4893617 98.1382979,21.1702128 C98.0851064,22.1276596 97.0212766,23.2446809 96.6489362,24.2021277 C97.0212766,24.2021277 97.287234,23.5106383 97.606383,23.1914894 C97.5531915,23.4574468 97.393617,24.0957447 97.1276596,24.0425532 C96.3829787,25.6382979 96.5425532,27.0744681 96.0638298,28.6170213 C96.1702128,28.6170213 96.3297872,28.5638298 96.4361702,28.4574468 C96.5425532,29.1489362 95.5851064,29.6808511 95.4255319,30.4255319 C95.2659574,31.7553191 95.3191489,33.6170213 93.7234043,34.2553191 C93.2978723,34.0957447 92.9255319,34.1489362 92.5531915,34.5212766 C92.287234,34.2553191 92.0744681,34.2553191 91.8617021,34.4148936 C90.7978723,33.9361702 91.0638298,33.1914894 90.3191489,32.6595745 C90.3723404,32.0744681 90.106383,31.5425532 90.3191489,30.9042553 C89.0425532,30.6382979 88.1382979,29.6808511 87.4468085,28.8297872 C87.5531915,28.6702128 87.6595745,28.7234043 87.712766,28.6170213 C87.0744681,27.9787234 87.1808511,27.2340426 86.7021277,26.5957447 C86.8617021,25.5851064 86.6489362,24.5744681 86.5957447,23.6170213 C86.7021277,23.2978723 86.4361702,23.7765957 86.3297872,23.5106383 C86.3297872,23.2978723 86.2234043,23.0851064 86.5425532,22.7659574 C86.2765957,22.8723404 86.2234043,22.712766 86.1702128,22.5 C85.106383,23.7765957 85.0531915,24.893617 83.9361702,26.1702128 C83.8829787,26.2765957 84.1489362,26.3297872 84.0425532,26.4893617 C82.606383,29.2553191 80.4787234,31.1702128 78.2446809,32.287234 C77.9787234,32.2340426 78.6170213,32.1808511 78.6702128,31.8617021 C78.1914894,31.4893617 77.1808511,31.8617021 77.0212766,31.1170213 C76.7553191,30.9042553 76.5425532,31.1702128 76.3297872,31.0106383 C75.9574468,30.1595745 75.2659574,29.3617021 75.1595745,28.4574468 C75.3191489,27.0744681 75.4787234,25.7446809 75.6382979,24.3617021 C77.1276596,22.1276596 77.712766,19.5744681 79.4148936,17.2340426 C79.9468085,16.5425532 80.4787234,15.5319149 81.1170213,14.787234 C82.287234,13.4042553 83.7765957,11.5957447 85.4255319,11.1702128 C86.4361702,11.9148936 87.606383,12.6595745 88.2978723,13.4574468 C88.4574468,13.6702128 88.4574468,13.8829787 88.3510638,14.1489362 C88.6702128,14.1489362 88.8297872,13.4574468 89.2021277,13.8829787 C89.2553191,13.7234043 89.6808511,13.4574468 89.3617021,13.3510638 C89.4680851,13.0851064 89.7340426,13.5638298 89.8404255,13.2978723 C90.106383,13.7765957 90.4255319,13.6170213 90.7446809,13.9893617 C91.5425532,14.8404255 91.0106383,15.7978723 91.3297872,16.8085106 C91.0638298,17.1808511 90.9042553,17.5 90.9042553,17.8191489 C91.2234043,17.9255319 91.0638298,17.287234 91.2765957,17.4468085 C91.6489362,18.0851064 90.8510638,18.9361702 91.2234043,19.5744681 C91.0638298,19.787234 91.0638298,20 90.8510638,20.2659574 C90.7978723,20.3723404 91.0106383,20.4787234 91.0638298,20.5319149 C90.3723404,21.5425532 90.5851064,22.393617 89.9468085,23.4042553 C90.4255319,23.5638298 90.2659574,22.8191489 90.5851064,22.5531915 C90.4787234,24.3617021 89.4680851,26.3297872 89.8404255,28.0851064 C90.3191489,28.4042553 90.7446809,28.7234043 91.1702128,29.0425532 C91.6489362,28.9361702 91.9148936,28.0319149 92.0212766,27.606383 C93.7765957,23.2446809 97.1276596,18.9361702 98.9893617,14.5212766 C97.8191489,14.8404255 96.7021277,15.4787234 95.3191489,14.4680851 C95.2659574,13.9361702 94.4680851,13.5106383 94.4680851,12.9787234 C96.9148936,11.6489362 99.3617021,10.2659574 101.968085,9.73404255 C103.617021,6.59574468 105.37234,3.24468085 107.074468,0.212765957 C109.521277,1.80851064 106.808511,4.20212766 107.12766,6.11702128 C106.43617,6.80851064 106.648936,7.34042553 106.648936,7.92553191 C106.861702,8.03191489 107.021277,7.81914894 107.234043,8.13829787 C107.5,7.92553191 107.765957,8.13829787 108.138298,8.13829787 C108.244681,8.13829787 108.351064,7.9787234 108.510638,7.9787234 C108.617021,7.9787234 108.723404,8.19148936 108.776596,8.19148936 C109.62766,8.19148936 111.06383,8.03191489 111.914894,8.5106383 C112.819149,8.93617021 113.297872,9.73404255 113.297872,10.4255319" id="Shape"></path>
    <path d="M100.106383,21.0106383 C99.6808511,21.7553191 99.4148936,22.393617 98.7234043,23.1914894 C98.7234043,23.0851064 98.6702128,22.9255319 98.6702128,22.8191489 C99.0957447,22.287234 99.787234,21.1170213 100.106383,21.0106383" id="Shape"></path>
    <path d="M70.6382979,16.8617021 C71.1170213,16.0638298 71.9680851,15.5851064 72.2340426,14.8404255 C71.7021277,15.106383 70.6914894,16.4893617 70.6382979,16.8617021 M72.9255319,14.3085106 C73.0851064,13.9893617 73.4042553,13.9893617 73.2446809,13.6702128 C73.1914894,13.8829787 72.8191489,14.0957447 72.9255319,14.3085106 M74.4680851,11.9148936 C74.2021277,11.6489362 74.0425532,12.2340426 73.7765957,12.287234 C74.0425532,12.4468085 74.2553191,12.0212766 74.4680851,11.9148936 M82.287234,9.14893617 C82.287234,9.46808511 82.1276596,9.94680851 81.8085106,10.106383 C80.2659574,9.41489362 79.0425532,10.9042553 77.712766,11.4893617 C77.606383,11.6489362 77.606383,11.8617021 77.4468085,12.0212766 C77.1808511,12.1808511 77.5531915,11.7021277 77.6595745,11.5957447 C77.5,11.3297872 77.4468085,11.8085106 77.287234,11.5425532 C76.0638298,12.712766 74.7340426,13.0851064 73.5638298,14.5212766 C74.787234,13.8297872 76.0106383,12.8191489 77.1808511,11.9680851 C76.9680851,12.8723404 75.6382979,13.3510638 74.9468085,13.9361702 C73.4042553,16.2234043 70.9042553,18.5638298 69.2021277,21.1702128 C69.2553191,20.8510638 69.2021277,20.6382979 68.8297872,20.6914894 C68.9361702,20.4255319 69.1489362,20.106383 69.1489362,19.8404255 C68.8297872,20.5319149 67.393617,21.9680851 68.0319149,22.712766 C68.1914894,22.6595745 68.4042553,22.0744681 68.7234043,21.8085106 C68.6170213,22.5 67.606383,23.5638298 67.1808511,24.5212766 C67.5531915,24.5744681 67.6595745,24.0425532 67.8723404,23.7234043 C67.6595745,25.106383 66.8085106,26.5957447 66.2234043,28.0851064 C66.0106383,28.2446809 66.5957447,28.2978723 66.3829787,28.4574468 C66.0106383,29.6276596 65.4787234,30.8510638 64.9468085,32.0744681 C64.3617021,31.8085106 64.5744681,31.4361702 64.4680851,31.0638298 C64.0425532,31.3829787 63.6702128,32.0744681 63.1914894,31.9148936 C63.1382979,31.7553191 63.1914894,31.5957447 63.1382979,31.4361702 C62.9255319,31.1170213 62.8191489,31.5425532 62.606383,31.2765957 C62.2340426,30.8510638 62.1276596,30.3723404 61.7021277,30 C62.0212766,29.2553191 61.2765957,28.8297872 61.5425532,28.1382979 C61.5957447,27.9255319 61.8617021,27.7659574 61.9680851,27.5531915 C62.1808511,26.9680851 62.3404255,26.3297872 62.606383,25.7446809 C64.0957447,22.7659574 64.6276596,19.3085106 66.0106383,16.2765957 C66.1170213,15.6914894 65.9574468,15.1595745 65.6914894,14.6276596 C66.0638298,14.2021277 66.5957447,14.6808511 66.9680851,14.2553191 C67.4468085,14.787234 68.2978723,14.6276596 68.4042553,15.2659574 C68.8829787,15.106383 69.3085106,14.7340426 69.6808511,14.2553191 C72.3404255,13.4042553 74.7340426,11.0106383 77.3404255,10.0531915 C77.5,9.84042553 77.1808511,9.73404255 77.5,9.5212766 C78.1382979,9.14893617 79.4680851,8.77659574 80.2659574,8.88297872 C81.0638298,8.88297872 81.6489362,8.5106383 82.287234,9.14893617" id="Shape"></path>
    <path d="M79.5744681,11.5957447 C79.1489362,12.6595745 77.6595745,12.8723404 76.8617021,13.8297872 C76.5957447,14.1489362 76.2765957,14.7340426 75.7978723,15 C75.6914894,15.0531915 75.4787234,14.9468085 75.3723404,15 C75.0531915,15.212766 74.6808511,15.7446809 74.2021277,16.1170213 C73.6702128,16.5425532 73.0319149,16.7021277 73.0319149,17.2340426 C72.606383,17.2340426 72.3404255,17.9255319 71.9680851,18.1914894 C73.2978723,15.2659574 75.9574468,14.0957447 77.9787234,12.0212766 C78.4574468,12.393617 79.0957447,11.8085106 79.5744681,11.5957447" id="Shape"></path>
    <path d="M75.6382979,15.5851064 C75.212766,16.0638298 75.2659574,16.5957447 74.7340426,16.8085106 C74.893617,16.3829787 75,15.5851064 75.6382979,15.5851064" id="Shape"></path>
    <path d="M73.1914894,17.1808511 C73.1914894,17.4468085 73.0319149,17.712766 72.8191489,17.9787234 C72.606383,17.606383 72.9255319,17.4468085 73.1914894,17.1808511" id="Shape"></path>
    <path d="M72.5531915,18.1382979 C72.606383,18.4042553 72.393617,18.9893617 72.0212766,18.8297872 C71.9680851,18.5106383 72.393617,18.3510638 72.5531915,18.1382979" id="Shape"></path>
    <path d="M71.6489362,19.2021277 C71.9680851,19.3085106 71.5425532,19.5744681 71.4361702,19.6276596 C71.2765957,19.5212766 71.4361702,19.0957447 71.6489362,19.2021277" id="Shape"></path>
    <path d="M64.3085106,14.3085106 C64.5212766,14.4680851 64.6276596,14.1489362 64.8404255,14.4680851 C63.7234043,16.5425532 62.4468085,20.7978723 59.8404255,21.9148936 C59.6808511,22.1276596 59.8404255,22.2340426 59.6808511,22.4468085 C59.0425532,22.8723404 58.4042553,23.2978723 57.7659574,23.8829787 C55.9574468,23.8297872 55.6914894,26.7021277 54.5212766,27.8191489 C54.2553191,26.9680851 54.8404255,25.9042553 55.106383,24.9468085 C53.5638298,26.4893617 53.6702128,28.2978723 53.9893617,29.787234 C55.106383,30.2659574 56.5425532,29.4680851 57.7659574,28.6170213 C58.8829787,27.8723404 60.0531915,26.7553191 61.2234043,25.6914894 C61.3829787,25.9042553 61.2234043,26.1702128 61.4361702,26.3829787 C59.8404255,28.0851064 59.5212766,30.3723404 58.0851064,31.9680851 C58.0319149,32.0744681 58.1914894,32.1276596 58.2978723,32.2340426 C57.606383,32.6595745 57.0212766,33.3510638 56.2234043,33.1382979 C55.8510638,33.4574468 55.4787234,33.8829787 55.0531915,33.5638298 C55.212766,33.4042553 55.6382979,33.3510638 55.6382979,33.0851064 C54.893617,33.2978723 53.8829787,33.1382979 52.9787234,32.8723404 C52.5,32.712766 52.5531915,32.3404255 52.1808511,31.8617021 C51.6489362,31.2234043 50.9042553,30.9042553 51.3297872,30.1595745 C50.8510638,30 51.1170213,29.6808511 50.7446809,29.5212766 C51.0106383,29.2553191 51.0638298,28.9893617 51.0638298,28.7765957 C50.6382979,27.6595745 51.2765957,26.3829787 51.2765957,25.212766 C52.1808511,23.4574468 53.1914894,21.3829787 53.8829787,19.8404255 C54.4680851,19.4680851 54.3617021,19.0425532 55,18.3510638 C55.1595745,18.1382979 54.9468085,18.0319149 54.893617,17.8723404 C56.0106383,16.4893617 56.7021277,15 57.8723404,13.8297872 C58.4042553,12.5 60.106383,12.0744681 61.0638298,10.9574468 C61.5425532,11.0638298 61.9680851,10.7446809 62.4468085,10.6914894 C62.712766,10.7978723 62.4468085,10.9042553 62.3404255,10.9574468 C62.5531915,10.9574468 62.6595745,11.3297872 63.1382979,11.6489362 C64.5212766,11.9680851 64.4680851,13.4574468 64.3085106,14.3085106" id="Shape"></path>
    <path d="M55.5319149,27.5 C55.7446809,27.6595745 55.3723404,28.0851064 55.212766,28.1382979 C55.0531915,27.9255319 55.4255319,27.712766 55.5319149,27.5" id="Shape"></path>
    <path d="M52.5531915,19.9468085 C52.712766,20.2659574 52.1808511,20.6914894 51.9680851,21.0638298 C51.8617021,20.6914894 52.287234,20.106383 52.5531915,19.9468085" id="Shape"></path>
    <path d="M4.36170213,19.0957447 C4.46808511,18.6702128 5.10638298,18.1914894 5,17.8191489 C4.68085106,18.2446809 4.25531915,18.7234043 4.36170213,19.0957447 M9.57446809,32.8723404 C11.2234043,30.7446809 13.1914894,29.0425532 14.2021277,26.4361702 C12.712766,28.4574468 10.4787234,30.6382979 9.57446809,32.8723404 M13.8297872,27.6595745 C14.2021277,28.0319149 14.5744681,27.0212766 14.4148936,26.8617021 C14.0957447,27.2340426 14.0957447,27.4468085 13.8297872,27.6595745 M14.787234,27.5 C15.106383,26.7021277 15.5319149,26.5957447 15.8510638,25.9042553 C15.3191489,26.0638298 14.787234,27.0212766 14.787234,27.5 M33.5106383,14.787234 C32.5,14.5212766 31.2765957,15.9574468 30.1595745,16.2765957 C27.7659574,18.4042553 25.9574468,20.3191489 24.1489362,23.2978723 C27.393617,21.3829787 30.7446809,18.6170213 33.5106383,14.787234 M16.5425532,26.0638298 C16.5957447,25.9574468 16.6489362,25.9042553 16.7021277,25.7978723 C16.6489362,25.9042553 16.5957447,26.0106383 16.5425532,26.0638298 M16.5425532,26.0638298 C15.8510638,27.1276596 14.6808511,28.4574468 14.3085106,29.5212766 C13.4574468,30 12.712766,31.3829787 11.8085106,31.7553191 C10.3723404,33.6702128 8.77659574,34.3617021 7.18085106,35.212766 C5.90425532,35 4.78723404,35.9042553 3.5106383,35.5851064 C3.13829787,35.4255319 3.40425532,35.1595745 3.45744681,34.893617 C2.5,34.6808511 1.75531915,34.2553191 1.22340426,33.2978723 C0.85106383,32.606383 0.744680851,31.1702128 0.425531915,30.212766 C0.265957447,29.787234 0.106382979,29.2553191 0.0531914894,28.6170213 C0,27.712766 0.159574468,27.0212766 0,26.1170213 C1.11702128,21.0638298 3.56382979,14.4680851 8.45744681,9.46808511 C10.5319149,7.39361702 12.8191489,4.89361702 15.2659574,3.77659574 C15.9042553,3.77659574 16.7021277,3.5106383 17.5531915,3.93617021 C18.5106383,4.41489362 19.3085106,5.21276596 19.787234,5.95744681 C19.2021277,6.38297872 18.5638298,6.32978723 17.9787234,6.38297872 C17.393617,6.70212766 16.8617021,7.18085106 16.2234043,7.28723404 C12.7659574,9.89361702 9.36170213,12.7659574 6.22340426,17.287234 C6.27659574,18.3510638 5.58510638,18.9893617 5.10638298,20.0531915 C4.73404255,20.8510638 4.5212766,21.8617021 4.20212766,22.7659574 C3.56382979,24.5212766 3.03191489,26.2234043 2.92553191,27.8191489 C3.08510638,27.9255319 3.19148936,27.5 3.40425532,27.7659574 C2.76595745,28.3510638 3.40425532,28.6702128 2.76595745,29.2553191 C2.9787234,30.2659574 3.13829787,31.2765957 3.13829787,32.3404255 C4.68085106,32.712766 6.06382979,30.8510638 7.87234043,29.4680851 C8.24468085,29.2021277 8.72340426,28.8829787 9.36170213,28.3510638 C11.7553191,26.2765957 15.0531915,22.393617 16.3297872,19.3085106 C14.3617021,19.4148936 12.606383,21.1702128 10.6914894,21.7553191 C10.3191489,21.3829787 9.94680851,21.3829787 9.62765957,21.4361702 C8.61702128,20.7446809 9.25531915,19.8404255 8.5106383,19.0957447 C12.5,15.5851064 16.8085106,14.1489362 21.0638298,12.1276596 C22.9787234,11.9148936 24.893617,11.5425532 26.9148936,12.0212766 C27.287234,12.3404255 27.606383,12.4468085 27.9255319,12.5531915 C28.4042553,13.1914894 29.0425532,13.7765957 28.6170213,14.5744681 C30.6914894,13.4574468 32.6595745,11.3829787 34.9468085,11.3297872 C35.9574468,12.0212766 36.9680851,12.712766 37.1276596,13.5638298 C36.5425532,14.6808511 36.1702128,15.6382979 35.212766,16.9148936 C35.2659574,17.0744681 34.9468085,17.287234 35.2659574,17.393617 C34.893617,18.1914894 34.2021277,19.3617021 33.3510638,20 C33.2978723,20.3191489 33.6170213,19.7340426 33.7765957,20 C33.4042553,20.4255319 33.0319149,21.2765957 32.5531915,21.1702128 C32.5,20.9574468 32.6595745,20.6914894 32.8723404,20.4255319 C32.0744681,21.4893617 30.8510638,22.0212766 30.3723404,22.9255319 C30.3191489,22.8191489 30.3723404,22.6595745 30.4255319,22.5531915 C28.2446809,24.6808511 25.9042553,26.1170213 23.5106383,27.0744681 C23.5638298,28.0851064 23.4574468,29.0957447 23.5106383,30.106383 C26.0106383,29.8404255 28.2446809,28.1382979 30.5851064,26.9680851 C31.4361702,26.1170213 32.5,25.6914894 33.3510638,24.9468085 C34.4680851,23.9893617 35.2659574,23.0851064 36.4893617,21.9148936 C37.0212766,21.3829787 37.606383,21.0106383 37.9255319,20.5851064 C38.6170213,19.5212766 38.7765957,18.2446809 39.5212766,17.1808511 C40,15.4255319 41.5957447,13.4574468 41.3829787,11.8085106 C42.0744681,11.5425532 42.9255319,12.2340426 43.7765957,12.8723404 C43.6702128,13.1382979 43.8297872,13.3510638 43.8297872,13.5638298 C44.4148936,13.2978723 44.9468085,12.9255319 45.5319149,12.606383 C45.5851064,12.712766 45.5319149,12.8723404 45.4787234,12.9787234 C47.5,11.9148936 50.0531915,10.7446809 52.2340426,13.2978723 C52.0744681,13.5106383 52.3404255,13.6702128 52.1276596,13.8829787 C54.3617021,15.106383 53.8297872,17.3404255 52.1276596,18.7765957 C51.6489362,20 50.4255319,21.3829787 49.8404255,22.7659574 C48.9361702,24.4680851 47.0744681,25.5319149 46.9148936,27.0744681 C48.4574468,25.9042553 49.1489362,23.8829787 50.4255319,22.2340426 C50.1595745,23.5638298 48.9893617,25.0531915 48.1914894,26.4893617 C47.9787234,26.5425532 47.7659574,26.8085106 47.5531915,26.7553191 C47.5,27.606383 46.8617021,27.7659574 46.8617021,28.5638298 C47.0212766,28.6702128 47.1276596,28.3510638 47.287234,28.4574468 C47.4468085,27.7659574 48.1382979,27.0212766 48.2978723,26.5957447 C48.6702128,27.0744681 48.2978723,27.3404255 47.9255319,27.9787234 C48.4042553,28.0319149 48.7765957,27.1808511 49.2553191,27.0744681 C48.5106383,28.7234043 47.7659574,30.4787234 46.2765957,31.4361702 C45.6914894,31.0638298 45.2659574,31.2765957 44.7340426,31.4361702 C43.3510638,30.5851064 43.8297872,29.4680851 43.5106383,28.5106383 C43.9361702,27.1276596 44.893617,26.0638298 45.3723404,24.6276596 C45.7978723,23.3510638 46.0638298,22.0744681 46.5957447,20.8510638 C46.8085106,20.4255319 46.9680851,20 46.9148936,19.5744681 C47.606383,18.4574468 48.1382979,16.8617021 48.6702128,15.5319149 C47.3404255,15.106383 46.3829787,17.1276596 45.1595745,17.7659574 C44.4148936,19.0425532 42.9787234,19.787234 42.1276596,21.0106383 C41.2765957,22.2340426 41.0638298,23.6702128 40.1595745,24.893617 C39.9468085,25.1595745 40.2659574,25.3191489 40.212766,25.5851064 C39.5212766,25.9042553 39.3085106,26.5425532 38.8829787,27.2340426 C39.2021277,27.2340426 39.3617021,26.4361702 39.6808511,26.7553191 C39.0425532,28.0851064 37.9787234,29.787234 37.5531915,31.4893617 C36.9148936,32.1276596 36.1170213,31.4361702 35.3723404,31.2234043 C34.5212766,30.6382979 34.5744681,29.9468085 33.7765957,29.4148936 C33.9361702,28.7234043 33.9361702,28.0319149 33.8297872,27.393617 C34.8404255,26.0106383 35.5319149,24.6276596 36.3297872,23.2446809 C34.893617,24.3617021 33.6170213,26.3829787 32.1276596,27.3404255 C32.287234,27.1808511 32.3404255,26.9680851 32.287234,26.8617021 C32.2340426,27.0212766 31.8085106,27.2340426 32.0744681,27.393617 C31.9680851,27.4468085 31.8617021,27.5 31.7553191,27.606383 C31.5425532,27.8723404 31.3829787,28.1382979 31.1702128,28.4042553 C31.0638298,28.4574468 31.3297872,28.7234043 31.4361702,28.6702128 C29.787234,30.8510638 27.5,33.3510638 25,33.8297872 C24.9468085,33.3510638 24.0425532,33.1382979 23.7234043,33.3510638 C22.8191489,32.606383 22.712766,33.1382979 21.6489362,32.287234 C21.7021277,32.1808511 21.8085106,32.0744681 21.8617021,32.0212766 C21.5957447,31.8085106 21.3297872,31.6489362 21.0638298,31.4361702 C19.893617,29.4680851 20,27.3404255 20.5851064,25.106383 C20.7446809,24.8404255 20.9574468,24.9468085 21.1170213,24.7340426 C21.9680851,21.2765957 25.4255319,18.2978723 27.8191489,14.9468085 C27.7659574,14.3085106 27.7659574,13.6702128 27.4468085,13.0851064 C25.4787234,11.9680851 24.0425532,14.5744681 22.3404255,15.2659574 C21.5425532,16.4893617 20.5851064,16.4893617 19.787234,17.5531915 C19.6808511,17.5 19.5212766,17.3404255 19.4680851,17.393617 C19.0957447,18.1382979 19.6276596,18.7765957 18.6702128,19.6276596 C18.5106383,19.893617 19.0425532,19.5212766 18.8829787,19.787234 C18.6170213,20.4787234 17.8723404,21.1702128 17.4468085,21.9148936 C18.0319149,21.9680851 17.7659574,21.4361702 18.1382979,21.2234043 C18.2446809,21.1702128 17.712766,21.8085106 17.712766,21.9680851 C17.6595745,22.0744681 17.8723404,22.1276596 17.8191489,22.287234 C17.393617,23.1914894 16.7553191,24.0957447 16.4893617,24.6808511 C18.0319149,23.8829787 18.8829787,20.6914894 20,19.2021277 C19.893617,20.3723404 19.2553191,21.6489362 18.6702128,22.9255319 C17.9255319,23.8829787 17.1808511,24.893617 17.287234,25.6914894 C16.9148936,26.1170213 16.5425532,26.8617021 16.1170213,27.1276596 C16.4361702,26.7553191 16.3829787,26.4361702 16.5425532,26.0638298 M4.89361702,17.2340426 C5,17.1276596 5.15957447,17.2340426 5.26595745,17.1808511 C6.38297872,15.4787234 7.60638298,14.0425532 8.45744681,12.7659574 C7.18085106,13.9361702 6.0106383,15.9574468 4.89361702,17.2340426" id="Shape"></path>
    <path d="M39.787234,26.0638298 C40.106383,26.1702128 39.6276596,26.5425532 39.5212766,26.5425532 C39.4680851,26.4361702 39.5744681,26.0106383 39.787234,26.0638298" id="Shape"></path>
    <path d="M35.7446809,16.2234043 C35.9574468,16.0638298 36.1702128,16.0106383 36.4361702,16.2765957 C35.6914894,16.5957447 36.0638298,17.5531915 35.2659574,18.0319149 C35.106383,17.5 36.0106383,16.7553191 35.7446809,16.2234043" id="Shape"></path>
    <path d="M32.287234,26.7021277 C32.3404255,26.8617021 32.287234,27.0212766 32.1276596,27.1808511 C32.1276596,27.1808511 32.0744681,27.1808511 32.0744681,27.2340426 C31.8617021,27.1276596 32.2340426,26.9148936 32.287234,26.7021277" id="Shape"></path>
    <path d="M32.1808511,27.2340426 C32.1276596,27.2340426 32.1276596,27.2340426 32.1808511,27.2340426 C32.1276596,27.2340426 32.1276596,27.2340426 32.1808511,27.2340426 C32.1276596,27.2340426 32.1276596,27.2340426 32.1808511,27.2340426" id="Shape"></path>
    <path d="M16.5425532,26.0638298 C16.5957447,26.0106383 16.6489362,25.9042553 16.7021277,25.7978723 C16.6489362,25.9042553 16.5957447,26.0106383 16.5425532,26.0638298" id="Shape"></path>
    <path d="M96.3297872,41.9680851 L95.3723404,42.2340426 L93.7234043,42.287234 C93.7234043,42.287234 91.2765957,42.0744681 93.4574468,41.9148936 L94.893617,41.9148936 L96.3297872,41.9680851 L96.3297872,41.9680851 Z M90.5319149,41.7553191 L90,42.0212766 L89.0957447,42.0744681 C89.0957447,42.0744681 87.8191489,41.8617021 88.9361702,41.7021277 L89.7340426,41.7021277 L90.5319149,41.7553191 L90.5319149,41.7553191 Z M147.180851,39.7340426 C143.723404,39.4148936 140.691489,39.2553191 137.606383,39.4148936 C136.276596,39.4680851 134.946809,39.4680851 133.670213,39.4680851 C130.159574,39.4680851 126.702128,39.4148936 123.191489,39.4148936 C120.531915,39.3617021 117.925532,39.2021277 115.265957,39.2553191 C111.223404,39.3617021 107.12766,39.2021277 103.031915,39.2021277 C101.276596,39.2021277 99.5212766,39.2021277 97.8191489,39.2553191 C95.3723404,39.3085106 92.9787234,39.4148936 90.5319149,39.5212766 C87.9255319,39.6276596 85.3723404,39.7340426 82.7659574,39.787234 C80.4787234,39.893617 78.2446809,40 75.9574468,40 C72.3404255,40 68.7765957,39.9468085 65.1595745,39.9468085 C61.1702128,39.9468085 57.2340426,40 53.2446809,40 L40.6914894,40 C39.7340426,40 38.7765957,39.893617 37.8191489,39.893617 C35.6914894,39.893617 33.6170213,40.106383 31.4893617,40 C31.0106383,39.9468085 30.5319149,40 30.0531915,40 C27.606383,40.0531915 25.212766,40.0531915 22.7659574,40.106383 C22.1276596,40.106383 21.4893617,40.0531915 20.8510638,40.0531915 C18.2446809,40.106383 15.6914894,40.1595745 13.0851064,40.1595745 L10.212766,40.1595745 C9.78723404,40.1595745 9.36170213,40.1595745 8.93617021,40.212766 C6.75531915,40.4787234 4.5212766,40.5851064 2.28723404,40.5851064 C2.34042553,41.0638298 2.39361702,41.5425532 2.44680851,42.0212766 C2.5,42.5 2.60638298,42.9787234 3.13829787,43.4574468 C3.72340426,43.5638298 4.46808511,43.8297872 5.15957447,43.8297872 C6.32978723,43.8297872 7.44680851,43.6702128 8.61702128,43.5106383 C9.68085106,43.4042553 10.6914894,43.2446809 11.7553191,43.1382979 C12.1276596,43.0851064 12.5,43.1382979 12.8723404,43.0851064 C15.5851064,42.606383 18.3510638,42.6595745 21.0638298,42.4468085 L22.0212766,42.4468085 C22.8723404,42.4468085 23.7234043,42.5 24.5744681,42.5 C27.6595745,42.393617 30.6914894,42.1808511 33.7765957,42.4468085 C35,42.5531915 36.1702128,42.7659574 37.393617,42.6595745 C37.606383,42.6595745 37.8191489,42.6595745 38.0319149,42.712766 C40.212766,43.0319149 42.4468085,43.0851064 44.6808511,43.0319149 C45.4787234,42.9787234 46.2765957,42.9787234 47.0744681,43.0319149 C48.6170213,43.1914894 50.1595745,43.0319149 51.6489362,42.9255319 C53.8297872,42.7659574 56.6489362,42.5 59.5212766,42.2340426 C59.9468085,42.1808511 60.3723404,42.1808511 60.7978723,42.2340426 C61.7553191,42.4468085 62.6595745,42.393617 63.6170213,42.393617 C64.787234,42.393617 65.9574468,42.4468085 67.0744681,42.5531915 C68.3510638,42.6595745 69.5744681,42.8723404 70.8510638,42.9787234 C74.8404255,43.2978723 78.8829787,43.5106383 82.9255319,43.2978723 C84.2553191,43.2446809 85.5319149,43.1382979 86.8617021,43.0319149 C88.5106383,42.9255319 90.1595745,42.7659574 91.7553191,42.8191489 C94.6808511,42.9255319 97.5531915,42.606383 100.478723,42.5 C102.393617,42.4468085 104.255319,42.287234 106.170213,42.1808511 C107.978723,42.0744681 109.734043,42.0212766 111.542553,41.9148936 C112.5,41.8617021 113.457447,41.8085106 114.361702,41.7553191 C115.797872,41.6489362 117.180851,41.5425532 118.617021,41.4361702 C119.521277,41.3829787 120.425532,41.3297872 121.276596,41.2765957 C123.085106,41.1702128 124.840426,41.1702128 126.648936,41.0106383 C127.659574,40.9574468 128.617021,40.9042553 129.62766,40.9574468 C130.585106,41.0106383 131.542553,41.0638298 132.5,40.9574468 C134.202128,40.7446809 135.851064,40.6914894 137.553191,40.6914894 C138.085106,40.6914894 138.617021,40.6914894 139.148936,40.6382979 C140.691489,40.5319149 141.968085,40.1595745 143.510638,40 C144.414894,39.893617 145.106383,39.9468085 146.06383,39.787234 C146.276596,40 146.755319,40 147.180851,39.7340426 L147.180851,39.7340426 Z" id="Shape"></path>
    <path d="M60.1595745,43.2978723 L61.5957447,43.2978723 L63.0319149,43.3510638 L62.0744681,43.6170213 L60.4255319,43.6702128 C60.4255319,43.6702128 57.9787234,43.5106383 60.1595745,43.2978723" id="Shape"></path>
    <path d="M25.9574468,42.6595745 L29.2021277,42.1808511 L32.5,41.8085106 L30.3191489,42.393617 L26.5957447,42.9787234 C26.5957447,42.9787234 21.0638298,43.5106383 25.9574468,42.6595745" id="Shape"></path>
    <path d="M68.4042553,43.0319149 L71.7021277,42.9255319 L75,42.9255319 L72.7659574,43.2446809 L68.9893617,43.4042553 C68.9893617,43.4042553 63.4574468,43.3510638 68.4042553,43.0319149" id="Shape"></path>
    <path d="M40.0531915,43.2446809 L37.1276596,43.4042553 L34.2021277,43.4042553 L36.1702128,42.606383 L39.4680851,42.287234 C39.4680851,42.287234 44.4148936,42.5 40.0531915,43.2446809" id="Shape"></path>
    <path d="M19.6276596,43.2978723 L25.106383,43.2978723 L30.5851064,43.4042553 L26.8617021,43.8829787 L20.6382979,43.9893617 C20.6382979,43.9361702 11.3829787,43.6170213 19.6276596,43.2978723" id="Shape"></path>
    <path d="M56.6489362,42.9255319 L57.4468085,42.9255319 L58.2446809,42.9787234 L57.712766,43.2446809 L56.8085106,43.2978723 C56.8085106,43.2978723 55.4787234,43.0851064 56.6489362,42.9255319" id="Shape"></path>
    <path d="M28.5106383,42.7659574 L29.2553191,42.7659574 L30.0531915,42.8191489 L29.5212766,43.0851064 L28.6170213,43.1382979 C28.6170213,43.1914894 27.3404255,42.9787234 28.5106383,42.7659574" id="Shape"></path>
    <path d="M12.7659574,43.6170213 L13.5638298,43.6170213 L14.3617021,43.6702128 L13.8297872,43.9361702 L12.9255319,43.9893617 C12.9255319,43.9893617 11.5957447,43.8297872 12.7659574,43.6170213" id="Shape"></path>
  </SvgImage>
);

export default Logo;

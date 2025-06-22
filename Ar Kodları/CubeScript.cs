using UnityEngine;

public class CubeScript : MonoBehaviour
{
    // TextMesh referansý (küpteki sayýyý tutan bileþen)
    private TextMesh textMesh;

    // Baþlangýç rengi
    private Color originalColor;

    void Start()
    {
        // Küpün TextMesh bileþenine ulaþ
        textMesh = GetComponentInChildren<TextMesh>();

        // Küpün baþlangýç rengini kaydet
        originalColor = GetComponent<Renderer>().material.color;
    }

    // Küpe týklama olayý
    private void OnMouseDown()
    {
        // TextMesh'deki sayýyý al ve int'e çevir
        int number = int.Parse(textMesh.text);

        // Sayýnýn asal olup olmadýðýný kontrol et
        if (IsPrime(number))
        {
            // Eðer sayý asalsa küp yeþile döner
            GetComponent<Renderer>().material.color = Color.green;
            UnityEngine.Debug.Log($"Asal bir küpe týkladýnýz: {number}");
        }
        else
        {
            // Eðer sayý asal deðilse küp kýrmýzýya döner
            GetComponent<Renderer>().material.color = Color.red;
            UnityEngine.Debug.Log($"Asal olmayan bir küpe týkladýnýz: {number}");
        }
    }

    // Asal sayý kontrol fonksiyonu
    private bool IsPrime(int num)
    {
        if (num <= 1) return false; // 1 ve 0 asal deðildir
        for (int i = 2; i <= Mathf.Sqrt(num); i++)
        {
            if (num % i == 0) return false;
        }
        return true; // Asal sayý
    }
}
